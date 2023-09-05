import { useState, useEffect } from "react";

function useAuth() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoggedIn(true);
    }, 3000);
  }, []);

  return loggedIn;
}

export default useAuth;
