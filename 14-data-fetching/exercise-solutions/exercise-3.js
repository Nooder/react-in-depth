/*
    1. Create a new Vite React project

    2. Use the pokemon API for this exercise:
       https://pokeapi.co/
       (Look at the docs for the pagination section)

    3. Create a Pokemon.jsx file and export a
       component of the same name

    4. Make it so when the component mounts, you fetch
       the first page of pokemon (limit 20, offset 0)
       from the pokemon API. Create a list of <p>
       tags each with a pokemon name from the returned
       list to put in the JSX markup. This will be returned
       at the top of the returned JSX with the <buttons>
       below it.

    4. Have Pokemon return 2 <button> elements, one
       saying "Previous" and the other "Next". Put these
       at the bottom of the JSX and have their onclick
       fetch either the next or previous page of pokemon
       to display (re-render) the list of <p> tags above
       with the new set of names.

    5. Import Pokemon in to main.jsx and replace the
       <App /> with it

    6. Test that it works in your Browser: Press previous
       and next to see if the network requests go out in the
       network tab and that you see the new names as you go
       back and forth.

    HINT* Use the next/prev pages from the responses to make
          this easier. Alternatively, you can keep track of
          and calculate limit/offset manually.
*/
