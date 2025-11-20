const Todo = ({ todo ,deleteHandler,editHandler}) => {
  return (
    <div className="todo-container">
      <div className="heading-container">
        <h3 className="heading">{todo.title}</h3>
      </div>
      <div className="btn-container">
        <button className="btn editBtn" onClick= {() => {editHandler(todo.id)}}>Edit</button>
        <button className="btn deleteBtn" onClick={() => {deleteHandler(todo.id)}}>Delete</button>
      </div>
    </div>
  );
};

export default Todo;
