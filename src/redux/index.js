import { Provider, useSelector, useDispatch } from "react-redux";
import { decrement, increment, store, selectCount } from "./store";

function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>increase</button>
      <button onClick={() => dispatch(decrement())}>decrease</button>
    </>
  );
}

function ReduxExample() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export { ReduxExample };
