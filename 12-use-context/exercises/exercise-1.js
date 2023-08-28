/*
    1. Create a new Vite React Project

    2. Create a file called Parent.jsx and export
       a Parent Component from inside it.

    3. Create a file called Child.jsx and export
       a Child Component from inside it.

    4. Create a new Context inside Parent

    5. Create state in Parent using useState that starts
       off as any String value.

    6. Have Parent return the Context's Provider
       Component and import and put a Child component
       as the Provider's sole child. Figure out what value(s)
       to pass in to the Provider as props.

    7. Use the useContext hook inside the Child component
       to return an <h1> containing the String value passed 
       down from the Parent's context value. Add a button that changes
       this String to another String when clicked as well.
       (Child will need a handle to the setState function from Parent
        and you can use the context to pass this down)

    8. Open your Browser to test that this works. You should
       see your String displayed in an <h1> in the DOM and it
       should change when you click the button beside it.
*/
