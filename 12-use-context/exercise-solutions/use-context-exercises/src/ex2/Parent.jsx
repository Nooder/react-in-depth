import { createContext } from "react";
import Child from "./Child.jsx";

const StringContext = createContext();
const NumberContext = createContext();

const name = "Monkey";
const age = 20;

function Parent() {
  console.log("parent");
  return (
    <StringContext.Provider value={name}>
      <NumberContext.Provider value={age}>
        <Child />
      </NumberContext.Provider>
    </StringContext.Provider>
  );
}

export default Parent;
export { StringContext, NumberContext };
