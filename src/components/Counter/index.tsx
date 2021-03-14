import { useCounter } from "../../hooks/useCounter";

function Counter() {
  const { count, increment, decrement } = useCounter();

  return (
    <div className="Counter">
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
