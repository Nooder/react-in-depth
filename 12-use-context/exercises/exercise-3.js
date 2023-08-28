/*
    1. Create a new Vite React Project

    2. Create a file called Parent.jsx and export
       a Parent Component from inside it.

    3. Create a file called Child.jsx and export
       a Child Component from inside it.

    4. Create a new Context inside Parent

    5. Create a reducer function that switches on an action
       type property and create the default Error and and 'UP'
       case where you take the previous state and add the
       action value property to it.

    5. Create state in Parent using useReducer that starts
       off as the Number 0, and pass in the reducer function

    6. Have Parent return the Context's Provider
       Component. Put an <h1> as the first child with the counter
       number from the useReducer state. Import and put a Child
       component as the Provider's other child. Figure out what
       value(s) to pass in to the Provider as props.

    7. Use the useContext hook inside the Child component
       to return an <button> that dispatches an action to make
       the counter in the Parent go up when clicked.

    8. Open your Browser to test that this works. You should
       see your counter displayed in an <h1> in the DOM and it
       should change when you click the button beside it.
*/
