import { createContext, useState, useEffect } from "react";

const BrowserContext = createContext();
const routerState = {};

function BrowserRouter({ children }) {
  const [currentURL, setCurrentURL] = useState(new URL(window.location.href));

  useEffect(() => {
    function handlePopStateEvent(e) {
      //   console.log(e);
      // set the url to be updated
      setCurrentURL(new URL(window.location.href));
    }

    window.addEventListener("popstate", handlePopStateEvent);

    return () => window.removeEventListener("popstate", handlePopStateEvent);
  }, []);

  return (
    <BrowserContext.Provider value={{ routerState, currentURL, setCurrentURL }}>
      {children}
    </BrowserContext.Provider>
  );
}

export default BrowserRouter;
export { BrowserContext };
