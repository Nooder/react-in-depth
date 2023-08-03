function Paragraph({ monkey, hello }) {
  //   console.log(props);
  //   console.log(props.monkey);
  console.log("hello:", hello);
  hello.map(() => 1);
  return <p>Hello {monkey}!</p>;
}
export default Paragraph;
