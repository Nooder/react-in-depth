import { useState } from "react";

function Form() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [h1Text, setH1Text] = useState("");

  function handleFname(e) {
    setFname(e.target.value);
  }

  function handleLname(e) {
    setLname(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(fname, lname, email);
    setH1Text(`First Name: ${fname} Last Name: ${lname} Email: ${email}`);
    setFname("");
    setLname("");
    setEmail("");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input name="fname" type="text" onInput={handleFname} value={fname} />
        <input name="lname" type="text" onInput={handleLname} value={lname} />
        <input name="email" type="text" onInput={handleEmail} value={email} />
        <button type="submit">Submit</button>
      </form>
      <h1>{h1Text}</h1>
    </>
  );
}

export default Form;
