// src/config/content/events/merge.js

const isPlainObject = (v) =>
  v !== null && typeof v === "object" && !Array.isArray(v);

/**
 * Identificador para merge de arrays de objetos.
 * Prioridade:
 * - key
 * - id
 * - name
 */
const getItemId = (item) => {
  if (!isPlainObject(item)) return null;
  if (typeof item.key === "string" && item.key.trim()) return `key:${item.key}`;
  if (typeof item.id === "string" && item.id.trim()) return `id:${item.id}`;
  if (typeof item.name === "string" && item.name.trim())
    return `name:${item.name}`;
  return null;
};

/**
 * Considera "mergeável" se TODOS os itens tiverem um identificador (key/id/name).
 * Nota: arrays vazios contam como mergeáveis (não forçam substituição).
 */
const isMergeableObjectArray = (arr) =>
  Array.isArray(arr) && arr.every((x) => !!getItemId(x));

const mergeObjectArraysById = (baseArr = [], patchArr = []) => {
  const baseById = new Map(baseArr.map((it) => [getItemId(it), it]));
  const patchById = new Map(patchArr.map((it) => [getItemId(it), it]));

  const out = [];

  // 1) preservar ordem do base
  for (const baseItem of baseArr) {
    const id = getItemId(baseItem);
    const patchItem = patchById.get(id);

    if (patchItem) out.push(deepMerge(baseItem, patchItem));
    else out.push(baseItem);
  }

  // 2) adicionar itens novos (ids que não existiam no base)
  for (const patchItem of patchArr) {
    const id = getItemId(patchItem);
    if (!baseById.has(id)) out.push(patchItem);
  }

  return out;
};

/**
 * deepMerge:
 * - objects: merge recursivo
 * - arrays:
 *    - se forem arrays de objetos "mergeáveis" (key/id/name): merge por id
 *    - caso contrário: SUBSTITUI
 * - primitivos: patch ganha
 */
export function deepMerge(base, patch) {
  if (patch === undefined) return base;

  // arrays
  if (Array.isArray(base) || Array.isArray(patch)) {
    if (Array.isArray(base) && Array.isArray(patch)) {
      if (isMergeableObjectArray(base) && isMergeableObjectArray(patch)) {
        return mergeObjectArraysById(base, patch);
      }
      return patch; // substitui (strings, objetos sem id, etc.)
    }
    return Array.isArray(patch) ? patch : base;
  }

  // object vs primitive
  if (!isPlainObject(base) || !isPlainObject(patch)) {
    return patch;
  }

  const out = { ...base };

  for (const [k, v] of Object.entries(patch)) {
    const prev = out[k];

    if (Array.isArray(v)) {
      if (
        Array.isArray(prev) &&
        isMergeableObjectArray(prev) &&
        isMergeableObjectArray(v)
      ) {
        out[k] = mergeObjectArraysById(prev, v);
      } else {
        out[k] = v; // substitui array
      }
      continue;
    }

    if (isPlainObject(prev) && isPlainObject(v)) {
      out[k] = deepMerge(prev, v);
      continue;
    }

    out[k] = v;
  }

  return out;
}
