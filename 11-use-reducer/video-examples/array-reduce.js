const arr = ["hello", "my", "name", "is", "monkey"];

const reducedArr = arr.reduce((prevState, currState) => {
  console.log(prevState, currState);
  return prevState + currState;
}, "");

console.log(reducedArr);
