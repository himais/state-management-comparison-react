import { create } from "zustand";

const useStore = create((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count - 1 }))
}));

function ZustandExample() {
  const {count, increase, decrease} = useStore((state) => state.count);

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
    </>
  );
}

export { ZustandExample };
