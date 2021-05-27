import React from "react";
import styled from "styled-components";
import Buttons from "./components/buttons";
import globalHook from "use-global-hook";

const initialState = {
  counter: 0,
};

const actions = {
  increment: (store) => {
    const newCounterValue = store.state.counter + 1;
    store.setState({ counter: newCounterValue });
  },
  decrement: (store) => {
    const newCounterValue = store.state.counter - 1;
    store.setState({ counter: newCounterValue });
  },
};

export const useGlobal = globalHook(React, initialState, actions);

function App({ className: c }) {
  const [globalState] = useGlobal();

  return (
    <div className={c}>
      <h1>Counter app</h1>
      <h2>{globalState.counter}</h2>
      <Buttons />
    </div>
  );
}

export default styled(App)`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: fit-content;
  margin: auto;
`;
