import { useEffect, useState } from "react";

export function useLocalStorage(key: string, initialValue: any) {
  const [state, setState] = useState<any>(() => {
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
