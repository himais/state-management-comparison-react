import { createContext, useState } from "react";
import { useContext } from "react";

const CounterContext = createContext();

function Counter() {
  const { count, setCount } = useContext(CounterContext);

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>increase</button>
      <button onClick={() => setCount(count - 1)}>decrease</button>
    </>
  );
}

function ContextExample() {
  const [count, setCount] = useState(0);

  return (
    <CounterContext.Provider value={{ count, setCount }}>
      <Counter />
    </CounterContext.Provider>
  );
}

export { ContextExample };
