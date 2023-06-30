function Input() {
  function handleInput(e) {
    // [INPUT id=ex1]: input_value
    // console.log(e.target.value);
    const inputValue = e.target.value;
    const tagName = e.target.tagName;
    const id = e.target.getAttribute("id");
    // console.log(e);
    const log = `[${tagName} id=${id}]: ${inputValue}`;
    console.log(log);
  }

  return <input type="text" id="username" onInput={handleInput} />;
}

export default Input;
