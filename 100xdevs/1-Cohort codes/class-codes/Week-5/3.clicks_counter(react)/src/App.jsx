import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react'; // Importing the 'useState' hook from React. This hook allows us to add state to our functional components.
import './App.css';

// In React, if we want to define a state variable, we use the 'useState' hook. If we don't use it, React won't update the DOM according to the state.
// For example, if we declare a global state without using 'useState', like this:
// let state = {
//   count: 0
// }
// This will lead to the state being updated on click, but it won't be rendered on the DOM because React doesn't know that the state has changed.

function App() {

  const [count, setCount] = useState(0);  /*Initializing the state. 'count' is the current state value, and
                                          'setCount' is a function that allows us to update the state.*/

  console.log(count) // Logging the current state value to the console.
  console.log(setCount); // Logging the state updater function to the console.

  function onClickHandler() {
    // This is the click handler function for our button. When the button is clicked, this function will be called.

    // count += 1; // This is a bad practice because React won't know that the state has changed, and the component won't be re-rendered.
    
    setCount(count + 1); /* This is the correct way to update the state. We use the 'setCount' function to update the 
     state, and we pass the new state value as an argument to the function.
    React will know that the state has changed and will re-render the component with the new state value.*/
  }

  return (
    <div>
      {/* In HTML, we attach event listeners to elements like this: <button onclick="function()">. In React, we do it like this: <button onClick={function}> */}
      <button onClick={onClickHandler}>Counter {count} </button>
    </div>
  )
}


export default App;