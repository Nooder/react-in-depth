/*
    1. Create a new Vite React project

    2. Use the pokemon API for this exercise:
       https://pokeapi.co/

    3. Create a Pokemon.jsx file and export a
       component of the same name

    4. Have Pokemon return an <input> for text as well
       as a <button> to click to search for pokemon. Make
       it so that you can enter a pokemon name and click the
       button to search for it on the pokemon API and display
       that pokemon's: name, weight and an image

    5. Make sure to also handle the Error case (no matching name)

    6. If you search for the same pokmemon again, find a way to
       cache the data from the previous request. Use a Map (or
        Object) to do this. Every request will:
        1. Check to see if the cache has the pokemon already
        2. If not, make the request and store it in the cache
        3. If it does, return that right away (no request)

    7. Import Pokemon in to main.jsx and replace the
       <App /> with it

    8. Test that it works in your Browser: Try the same name
       twice and check the network tab for duplicate requests.
       Also test the error case.
*/
