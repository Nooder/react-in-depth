/*
    1. Create a new Vite React Project

    2. Create a file called Parent.jsx and export
       a Parent Component from inside it.

    3. Create a file called Child.jsx and export
       a Child Component from inside it.

    4. Create TWO new Contexts inside Parent as well
       as TWO contextState variables. Have the first
       be a number and the second be a String.

    5. Have Parent return BOTH Context's Provider
       Components (Nest one in the other) and import
       and put a Child component as the inner Provider's
       sole child. Figure out what value(s) to pass in to
       the Provider as props.

    6. Use TWO useContext hooks inside the Child component
       one for each of the Parent's Contexts. Then, return
       two <p> tags, where you display the text of each
       context in each <p> tag separately (One with the Number
       and the other with the String from <Parent>)

    7. Open your Browser to test that this works. You should
       see your String and Number displayed in the <p> tags
       in the DOM.
*/
