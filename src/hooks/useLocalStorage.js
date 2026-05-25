import { useState, useEffect } from "react";

/**
 * Hook personnalisé : useLocalStorage
 * Synchronise un état React avec le localStorage du navigateur.
 * @param {string} key   - Clé de stockage
 * @param {*}      init  - Valeur initiale si rien n'est stocké
 */
function useLocalStorage(key, init) {
  const [value, setValue] = useState(() => {
    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : init;
    } catch {
      return init;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      console.error("useLocalStorage: échec de la sérialisation.");
    }
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;
