import { useEffect, useState } from "react";
import "./App.css";
import Todos from "./components/Todos";
import Input from "./components/Input";

// const API = process.env.REACT_APP_API_URL;

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

  // //fetch data
  // async function fetchTodos() {
  //   try {
  //     const res = await fetch(API);
  //     if (!res.ok) {
  //       throw new Error("Failed to fetch todos");
  //     }
  //     const data = await res.json();
  //     setTodos(data);
  //   } catch (err) {
  //     console.log("fetch Todos error", err);
  //   }
  // }
  // useEffect(() => {
  //   fetchTodos();
  // }, []);

  const [show, setShow] = useState(false);
  const [todos, setTodos] = useState(todoObject);
  const [inputValue, setInputValue] = useState("");
  const [edit, setEdit] = useState(null);

  function showHandler() {
    setShow(!show);
  }

  function changeHandler(event) {
    setInputValue(event.target.value);
    // console.log(inputValue);
  }

  // async function submitHandler(event) {
  //   event.preventDefault();
  //   const title = inputValue;
  //   if (!title) {
  //     alert("Please type something!");
  //     return;
  //   }
  //   try {
  //     if (edit === null) {
  //       const res = await fetch(API, {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify({ title }),
  //       });
  //       if (!res.ok) {
  //         throw new Error("Failed to create new todo");
  //         return;
  //       }
  //       await fetchTodos();
  //       //if you want to edit existance todo
  //     } else {
  //       const res = await fetch(`${API}/${edit}`, {
  //         method: "PUT",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify({ title }),
  //       });
  //       if (!res.ok) {
  //         throw new Error("Failed to update existance todo");
  //         return;
  //       }
  // // API call success hone ke baad UI update
  // await fetchTodos();      // backend se fresh data
  // setInputValue("");       // input clear
  // setEdit(null);           // edit mode off
  // setShow(false);
  //     }
  //   }
  // catch (error) {
  //   console.log("error", Error);
  // }
  function submitHandler(event) {
    event.preventDefault();
    if (edit != null) {
      setTodos((todos) =>
        todos.map((todo) =>
          todo.id === edit ? { ...todo, title: inputValue } : todo
        )
      );
      setEdit(null);
      setInputValue("");
      setShow(false);
    } else {
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
  }

  // async function deleteHandler(id) {
  //   try {
  //     const res = await fetch(`${API}/${id}`, {
  //       method: "DELETE",
  //     });
  //     if (!res.ok) {
  //       alert("Failed to delete from server!!");
  //       return;
  //     }
  // // Backend se delete hone ke baad UI update
  //      await fetchTodos();
  //     //UI rendering
  //     const filterData = todos.filter((todo) => todo.id !== id);
  //     setTodos(filterData);
  //   } catch (error) {
  //     console.log("error", error);
  //   }
  // }
  function deleteHandler(id) {
    const filterData = todos.filter((todo) => todo.id !== id);
    setTodos(filterData);
  }

  function editHandler(id) {
    const editTodo = todos.find((todo) => todo.id === id);
    setEdit(id);
    setInputValue(editTodo.title);
    setShow(true);
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
          <Todos
            todos={todos}
            deleteHandler={deleteHandler}
            editHandler={editHandler}
          ></Todos>
        )}
      </div>
    </div>
  );
}

export default App;
