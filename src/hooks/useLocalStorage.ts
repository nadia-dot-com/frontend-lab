import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [state, setState] = useState<T>(() => {
    try {
      const localStorageData = localStorage.getItem(key);

      return localStorageData ? JSON.parse(localStorageData) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(state));
    } catch (e) {
      console.log(e);
    }
  }, [key, state]);

  return [state, setState] as const;
}
