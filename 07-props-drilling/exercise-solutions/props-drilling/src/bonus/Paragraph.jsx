function Paragraph({ children, text }) {
  //   console.log(props);
  return (
    <>
      <p>{text}</p>
      {children}
    </>
  );
}

export default Paragraph;
