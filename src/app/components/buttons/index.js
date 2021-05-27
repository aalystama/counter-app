import styled from "styled-components";
import ActionButton from "./Button";
import { useGlobal } from "../../App";

const Buttons = ({ className: c }) => {
  const [, globalActions] = useGlobal();

  return (
    <section className={c}>
      <ActionButton color="primary" onClick={() => globalActions.decrement()}>
        -1
      </ActionButton>
      <ActionButton color="primary" onClick={() => globalActions.increment()}>
        +1
      </ActionButton>
    </section>
  );
};

export default styled(Buttons)`
  display: flex;
  align-self: stretch;
  justify-content: space-between;
`;
