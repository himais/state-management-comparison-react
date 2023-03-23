import { ZustandExample } from "./zustand";
import { ReduxExample } from "./redux";
import { JotaiExample } from "./jotai";
import { ContextExample } from "./context";

export default function App() {
  return (
    <>
      Zustand:
      <ZustandExample />
      <hr />
      Redux:
      <ReduxExample />
      <hr />
      Jotai:
      <JotaiExample />
      <hr />
      Context API:
      <ContextExample />
      <hr />
    </>
  );
}
