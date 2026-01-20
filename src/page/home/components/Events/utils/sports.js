export function tokenizeSports(raw) {
  if (!raw) return ["Other"];

  const tokens = raw
    .split(/[\/|,]/g)
    .map((s) => s.trim())
    .filter(Boolean);

  return tokens.length ? tokens : ["Other"];
}

export function getSportOptions(normalizedEvents) {
  const set = new Set();

  for (const ev of normalizedEvents) {
    for (const s of ev.sportTokens ?? []) set.add(s);
  }

  const list = Array.from(set);

  const priority = [
    "RG",
    "WAG",
    "MAG",
    "TeamGym",
    "Trampolins",
    "BMX",
    "Track Cycling",
  ];
  list.sort((a, b) => {
    const pa = priority.indexOf(a);
    const pb = priority.indexOf(b);
    if (pa !== -1 || pb !== -1)
      return (pa === -1 ? 999 : pa) - (pb === -1 ? 999 : pb);
    return a.localeCompare(b);
  });

  return list;
}
