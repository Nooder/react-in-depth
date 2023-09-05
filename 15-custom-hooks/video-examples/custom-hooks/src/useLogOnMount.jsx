import { useEffect } from "react";

function useLogOnMount(name) {
  useEffect(() => {
    console.log(`${name || "Component"} has mounted!`);
  }, []);
}

export default useLogOnMount;
