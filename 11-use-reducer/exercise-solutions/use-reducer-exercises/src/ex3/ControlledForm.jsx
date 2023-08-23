import { useReducer } from "react";

function formReducer(state, action) {
  //   console.log(action);
  //   console.log(state);
  switch (action.type) {
    case "CHANGE": {
      return {
        ...state,
        [action.value.name]: action.value.value,
      };
    }
    default:
      throw new Error("Invalid Action Type");
  }
}

const initialState = { name: "", email: "", age: "", animal: "" };

function ControlledForm() {
  const [formState, dispatchForm] = useReducer(formReducer, initialState);

  function submitForm(e) {
    e.preventDefault();
    console.log(formState);
  }

  function formChange(e) {
    // console.log(e.target.name, e.target.value);
    dispatchForm({
      type: "CHANGE",
      value: { name: e.target.name, value: e.target.value },
    });
  }

  return (
    <>
      <form onSubmit={submitForm} onChange={formChange}>
        <input type="text" name="name" />
        <input type="text" name="email" />
        <input type="number" name="age" />
        <input type="text" name="animal" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default ControlledForm;
