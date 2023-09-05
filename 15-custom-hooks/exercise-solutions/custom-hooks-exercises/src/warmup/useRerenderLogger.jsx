import { useEffect } from "react";

function useRerenderLogger() {
  useEffect(() => {
    console.log("Component has mounted.");
  }, []);

  useEffect(() => {
    console.log("Component has re-rendered.");
  });

  //
}

export default useRerenderLogger;
