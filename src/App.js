import { useState } from "react";
import "./App.css";
import Todos from "./components/Todos";
import Input from "./Input";

function App() {
  const todoObject = [
    {
      id: 1,
      title: "Learning React",
    },
    {
      id: 2,
      title: "Learning Hooks",
    },
    {
      id: 3,
      title: "Learning useState Hooks",
    },
  ];

  const [show, setShow] = useState(false);
  const [todos, setTodos] = useState(todoObject);
  const [inputValue, setInputValue] = useState("");

  function showHandler() {
    setShow(!show);
  }

  function changeHandler(event) {
    setInputValue(event.target.value);
    // console.log(inputValue);
  }

  function submitHandler(event) {
    event.preventDefault();
    if (!inputValue) {
      alert("Please type something else! ");
      return;
    }
    const newTodo = {
      id: Date.now(),
      title: inputValue,
    };
    setTodos([...todos, newTodo]);
    setInputValue("");
    setShow(false);
  }
  function deleteHandler(id) {
    const filterData = todos.filter((todo) => todo.id !== id);
    setTodos(filterData);
  }

  return (
    <div className="App">
      <h1 className="heading">My Todo Lists</h1>
      <div className="btn">
        <button onClick={showHandler} className="create">
          Create New Todo
        </button>
      </div>
      <div className="container">
        {show ? (
          <Input
            showHandler={showHandler}
            changeHandler={changeHandler}
            submitHandler={submitHandler}
            inputValue={inputValue}
          />
        ) : (
          <Todos todos={todos} deleteHandler={deleteHandler}></Todos>
        )}
      </div>
    </div>
  );
}

export default App;
