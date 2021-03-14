import { useState, useCallback } from "react";

export function useCounter(initValue: number = 0) {
  const [count, setCount] = useState(initValue);

  const increment = useCallback(() => setCount((prev) => prev + 1), []);

  const decrement = useCallback(() => setCount((prev) => prev - 1), []);

  return { count, increment, decrement };
}
