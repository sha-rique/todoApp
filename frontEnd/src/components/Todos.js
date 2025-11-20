import Todo from "./Todo";

const Todos = ({ todos, deleteHandler, editHandler }) => {
  return (
    <div className="todos-container">
      {todos.map((todo) => (
        <Todo
          todo={todo}
          key={todo.id}
          deleteHandler={deleteHandler}
          editHandler={editHandler}
        ></Todo>
      ))}
    </div>
  );
};
export default Todos;
