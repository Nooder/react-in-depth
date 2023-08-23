function reducer(state, action) {
  // state === previous state (running total)
  // action === current value in array
  return state + action;
}

const res = [1, 2, 3, 200, 500].reduce(reducer);
console.log(res); // This should log: 6
