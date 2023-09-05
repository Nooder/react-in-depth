/*
    1. Create a new Vite React Project

    2. Create a file called useStateWithLogger.jsx
       and export a function of the same name

    3. Create a file called Home.jsx and export
       a Component of the same name

    4. Make useStateWithLogger a function that takes the
       same argument as useState (the initial state).
       This will log out 'state has changed from old_value
       to new_value' where old_value is the previous state
       (before the change) and new_value is the new state
       (after the change). useStateWithLogger should return
       the state and setState equivalents just like useState.
       *Note setState can take a VALUE OR A FUNCTION! This
       hook should support both!
       // setState(state + 1)
       // setState(prev => prev + 1)

    5. Inside Home, import and use useStateWithLogger
       to make the logs show up when a state inside Home
       is changed (eg: a counter or toggle)
       (Add whatever you need to trigger re-renders
        inside Home so you can test this)

    6. Replace <App /> with Home inside main.jsx and test
       that all this works in your Browser

    HINT* You can use useRef to help keep track of previous
          values of state
*/
