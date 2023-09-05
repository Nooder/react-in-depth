/*
    1. Create a new Vite React Project

    2. Create a file called useAuth.jsx and export
       a function of the same name

    3. Create a file called Home.jsx and export
       a Component of the same name

    4. Make useAuth return a single value which is
       stateful that keeps track of a boolean (logged in
       or not logged in). Make it so that this hook changes
       this value from false to true after a few seconds of
       it mounting in the component it's used in.

    5. Inside Home, import and use useAuth and conditionally
       render an <h1> saying 'Not authenticated' if it's false
       or 'Your Profile' if it's true.

    6. Replace <App /> with Home inside main.jsx and test
       that all this works in your Browser. You should see
       the <h1> change after the amount of seconds you set
       for the login state to change to true.
*/
