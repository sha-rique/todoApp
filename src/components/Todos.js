import Todo from "./Todo";

const Todos = ({ todos , deleteHandler}) => {
  return (
    <div className="todos-container">
      {todos.map((todo) => (
        <Todo todo={todo} key={todo.id} deleteHandler={deleteHandler}></Todo>
      ))}
    </div>
  );
};
export default Todos;
