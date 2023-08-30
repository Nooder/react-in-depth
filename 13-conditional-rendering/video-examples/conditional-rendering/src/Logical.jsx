function Logical() {
  const condition = undefined;

  // true && <h1>
  //   return condition && <h1>Hello!</h1>;
  //   return condition || <h1>Hello, or!</h1>;
  return condition ?? <h1>Hello, nullish coalescing!</h1>;
}

export default Logical;
