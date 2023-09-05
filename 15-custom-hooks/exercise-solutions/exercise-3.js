/*
    1. Create a new Vite React Project

    2. Create a file called useQuery.jsx
       and export a function of the same name

    3. Create a file called Home.jsx and export
       a Component of the same name

    4. Make useQuery a hook that takes a URL to fetch
       as an argument. The hook will fetch this URL
       on mount and keep a cache of previously fetched
       URLs and their responses (assume JSON for this).
       This hook should return the current state value
       (currently fetched data) as well as a function
       called 'fetcher' that will allow a Component to
       make future requests (with a URL as an argument)
       that also uses the same cache.
       // const [data, fetcher] = useQuery("http://....")
       // fetcher("http://....") -> change 'data' and re-render

    5. Duplicate fetched URLs should return immediately
       from the cache in the hook, otherwise a fetch request
       is made and it is stored in the cache for future calls.

    6. Inside Home, import and use useQuery and use a JSON
       API URL (like at pokeapi.co) to make the initial fetch
       request and display the stateful data in Home (eg. name,
       height, etc.). Use the fetcher function to fetch another
       URL (pokemon name) given a new value from an <input> and
       a <button> click to submit/fetch the new data. Test that
       no network calls are made for duplicate URLs using the 
       network tab in your Browser dev tools.

    7. Replace <App /> with Home inside main.jsx and test
       that all this works in your Browser
*/
