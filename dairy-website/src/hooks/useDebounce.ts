import { useEffect, useState } from "react";

export function useDebounce<T>(value: T, delay: number): T {
  const [bounce, setBounce] = useState<T>(value);
  useEffect(() => {
    let timer = setTimeout(() => {
      setBounce(value);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return bounce;
}
