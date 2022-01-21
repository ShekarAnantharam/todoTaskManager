import React, { useState } from "react";
import deleteIcon from "./Images/icon-delete.svg";
import "./App.css";
import Header from "./Components/header";
function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const newtodo = {
      id: new Date().getTime(),
      text: todo,
      completed: false
    };
    setTodos([...todos, newtodo]);
    setTodo("");
  }

  function deleteTodo(id) {
    const newTodos = [...todos].filter(todo => todo.id != id);
    setTodos(newTodos);
  }
  function handleComplete(id) {
    const newTodos = [...todos].map(todo => {
      if (todo.id == id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(newTodos);
  }
  function deleteAllTodos() {
    setTodos([]);
  }
  return (
    <div className="App">
      <Header />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={e => setTodo(e.target.value)}
          value={todo}
        />
        <button className="btn-sm btn-primary" type="submit">
          Add new ToDo
        </button>
      </form>
      {todos.map(todo => {
        return (
          <div className="todo" key={todo.id}>
            <input
              type="checkbox"
              onChange={() => handleComplete(todo.id)}
              checked={todo.completed}
            />
            {todo.completed ? (
              <div>
                <strike>{todo.text}</strike>
              </div>
            ) : (
              <div>{todo.text}</div>
            )}

            <button
              className="btn-danger btn-sm"
              onClick={() => deleteTodo(todo.id)}
            >
              x{/* <img className="deletebutn" src={deleteIcon} /> */}
            </button>
          </div>
        );
      })}
      <button onClick={deleteAllTodos} className="btn-danger btn-sm">
        clear all todos
      </button>
    </div>
  );
}

export default App;
