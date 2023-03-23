import { create } from "zustand";

const useStore = create((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count - 1 }))
}));

function ZustandExample() {
  const count = useStore((state) => state.count);
  const increase = useStore((state) => state.increase);
  const decrease = useStore((state) => state.decrease);

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
    </>
  );
}

export { ZustandExample };
