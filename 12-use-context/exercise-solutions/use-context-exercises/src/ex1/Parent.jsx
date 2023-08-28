import { createContext, useState } from "react";
import Child from "./Child.jsx";

const StringContext = createContext();

function Parent() {
  const [stringState, setStringState] = useState("Start");
  return (
    <StringContext.Provider value={[stringState, setStringState]}>
      <Child />
    </StringContext.Provider>
  );
}

export default Parent;
export { StringContext };
