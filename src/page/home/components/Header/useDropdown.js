import { useEffect, useRef, useState } from "react";

export default function useDropdown() {
  const [openKey, setOpenKey] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    const onDocClick = (e) => {
      if (!ref.current) return;
      if (!ref.current.contains(e.target)) setOpenKey(null);
    };

    const onEsc = (e) => {
      if (e.key === "Escape") setOpenKey(null);
    };

    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onEsc);

    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onEsc);
    };
  }, []);

  const isOpen = (key) => openKey === key;

  const toggle = (key) => setOpenKey((prev) => (prev === key ? null : key));

  const close = () => setOpenKey(null);

  return { ref, isOpen, toggle, close };
}
