import { atom, useAtom } from "jotai";

const countAtom = atom(0);

function JotaiExample() {
  const [count, updateCount] = useAtom(countAtom);

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => updateCount((number) => number + 1)}>
        increase
      </button>
      <button onClick={() => updateCount((number) => number - 1)}>
        decrease
      </button>
    </>
  );
}

export { JotaiExample };
