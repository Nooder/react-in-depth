import { useContext } from "react";
import { BrowserContext } from "./BrowserRouter.jsx";

function Link({ children, to }) {
  const { setCurrentURL } = useContext(BrowserContext);

  function handleNavigation() {
    window.history.pushState({}, "", to);
    setCurrentURL(new URL(window.location.origin + to));
  }

  return <a onClick={handleNavigation}>{children}</a>;
}

export default Link;
