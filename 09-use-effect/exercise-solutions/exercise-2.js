/*
    1. Create a new Vite React project

    2. Create 2 files each with their own component
       exported of the same name:
       - Home.jsx
       - Section.jsx

    3. Add state to Home.jsx where there is an <h1> that
       says "Visits: " in it as well as a <button>. Put any
       text inside the button like a '+'. When we click the 
       button, we should increase the number of visits in 
       the <h1>, just like a counter. 
       Eg: Visits: 1, Visits: 2 ... etc

    4. Add state to the Section.jsx component such that it
       returns an <h2> with a timer in it for how long the
       user has been on that page for in seconds.
       Eg: Time on page: 1 second(s), Time on page: 2 second(s)

    5. Add a single Section component to the Home component right
       below the h1 and button.

    6. Put a useEffect that runs on every single re-render inside
       both Home and Section that says that that component has
       re-rendered: "Home has re-rendered", "Section has re-rendered"

    7. Try to predict how/when the log/useEffect in the Home and Section
       components will be triggered (based on state and mounting)

    8. Import Counter in to main.jsx and replace the <App />
       with it to test if you're right in your Browser.

    HINT* Be careful with cleanup functions!
*/
