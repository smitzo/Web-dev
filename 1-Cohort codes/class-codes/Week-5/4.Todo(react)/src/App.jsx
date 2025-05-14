import { useState } from "react";
import PropTypes from 'prop-types';

// The App component
function App() {
  console.log("app got called");
  // The state: an array of todo objects
  const [todos, setTodos] = useState([
    { 
      title: 'go to gym',
      description: 'go gym from 6-9',
    }, 
    {
      title: 'study dsa',
      description: 'study dsa 9-11',
    }
  ]);

  // The function to add a new todo
  function addTodo() {
    console.log(" addTodo got called");
    // To add a new todo, we create a new array by spreading the existing todos and adding a new todo object
    setTodos([...todos, {
      title: "new Todo",
      description: "description of new todo"
    }]);
  }

  // The JSX returned by the App component
  return (
    <div>
      {/* Mapping over the todos array and rendering a Todo component for each todo */}
      {todos.map((todo, index) => (
        <Todo key={index} title={todo.title} description={todo.description} />
      ))}
      {/* A button to add a new todo */}
      <button onClick={addTodo}>Add Todo</button>
      {/* Calling the DarkNewTodos function */}
      <DarkNewTodos todos={todos} />
    </div>
  );
};

// The Todo component renders the title and decription
function Todo(props) {
  console.log("Todo component got called");
  // The props received by the Todo component
  const { title, description } = props;

  // The JSX returned by the Todo component
  return (
    <div>
      <h1>{title}</h1>
      <h2>{description}</h2>
    </div>
  );
}

// Prop types validation for the Todo component
Todo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

// The DarkNewTodos component
function DarkNewTodos(props) {
  const todos = props.todos; // Extract the todos array from the props

  return (
    <div>
      {todos.map(function(todo, index) {
        return (
          <div key={index} style={{ background: "black", color: "white" }}>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
          </div>
        );
      })}
    </div>
  );
}

// Prop types validation for the DarkNewTodos component
DarkNewTodos.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })).isRequired,
};

export default App;

// State: In React, state refers to the data that can change within a component. 
//In this example, the state is an array of todo objects, stored in the todos variable. 
//The setTodos function is used to update the state.

// Props: Props (short for "properties") are read-only values passed from a parent component to a child component. 
//In this example, the Todo component receives title and description props from the App component.


// Components: In React, components are reusable pieces of code that represent a part of the user interface. 
//In this example, we have three components: App, Todo, and DarkNewTodos.


// JSX: JSX is a syntax extension for JavaScript that allows us to write HTML-like code in our JavaScript files.
// In this example, we use JSX to define the structure of our components.


// Event handling: In the App component, we define an addTodo function that is called when the "Add Todo" button is clicked.
// This function updates the state by adding a new todo object to the todos array.


// Mapping over an array: In the App component, we use the map method to iterate over the todos array and render a Todo component for each todo object. 
//We pass the title and description props to each Todo component.


