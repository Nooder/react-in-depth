import { useState, useEffect, useRef } from "react";

function useQuery(initialURL) {
  const [data, setData] = useState(null);
  const dataCache = useRef(new Map());

  useEffect(() => {
    fetch(initialURL)
      .then((response) => response.json())
      .then((json) => {
        // cache this network call for the future
        dataCache.current.set(initialURL, json);
        setData(json);
      });
  }, []);

  function fetcher(urlToFetch) {
    const cache = dataCache.current;
    // check if the data is already cached
    if (cache.has(urlToFetch)) {
      // CACHE HIT
      setData(cache.get(urlToFetch)); // set state to be this cached value
      console.log("CACHE HIT: ", urlToFetch);
      return;
    }

    // CACHE MISS - fetch data and store it in the cache
    fetch(urlToFetch)
      .then((response) => response.json())
      .then((json) => {
        // cache response
        cache.set(urlToFetch, json);
        setData(json);
        console.log("CACHE MISS: ", urlToFetch);
      });
  }

  return { data, fetcher };
}

export default useQuery;
