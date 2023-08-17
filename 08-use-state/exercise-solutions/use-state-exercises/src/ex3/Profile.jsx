import { useState } from "react";
import Button from "./Button";

function Profile() {
  const [loggedInText, setLoggedInText] = useState("Logged In");
  return (
    <>
      <p>{loggedInText}</p>
      <Button setLoggedInText={setLoggedInText} loggedInText={loggedInText} />
    </>
  );
}

export default Profile;
