/*
    1. Create a new Vite React project

    2. Create a Button.jsx file that has a component
       that returns a <button /> with some text in it. However,
       make the text inside come from a prop passed in to
       the component. Also, make the onclick event of the
       button refer to a function that is passed in as a prop
       as well.

    3. Create a Header.jsx file that has a component
       that returns an <h1 /> with some text in it. However,
       make the text inside come from a prop passed in to
       the component (name it whatever you like).

    4. Create a Section.jsx file that composes one
       Header component with a Button component
       below it while passing in some text to each
       as props.

    5. Inside Section.jsx, create a function called "handleClick"
       that logs out "Boo!" the console. Pass this in to the 
       Button component to be used for it's click handler prop.

    6. Replace the <App /> in the main.jsx file with
       the <Section /> component above

    7. Check in your Browser to see if it works as expected
       (You should see your <h1> and <button> show up and
        the button should log "Boo" when clicked)

    BONUS: Why can we pass around the "handleClick" function
           as a prop like this?
*/
