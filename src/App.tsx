import { css } from "../styled-system/css/css.js";
import { Counter } from "./Counter.js";

const App = ({ name = "Anonymous" }) => {
  return (
    <div style={{ border: "3px red dashed", margin: "1em", padding: "1em" }}>
      <h1>Hello {name}!!</h1>
      <h3 className={css({ color: "red", fontWeight: "bold" })}>
        This is a server component.
      </h3>
      <Counter />
    </div>
  );
};

export default App;
