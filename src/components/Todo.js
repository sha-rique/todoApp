const Todo = ({ todo ,deleteHandler}) => {
  return (
    <div className="todo-container">
      <div className="heading-container">
        <h3 className="heading">{todo.title}</h3>
      </div>
      <div className="btn-container">
        <button className="btn editBtn">Edit</button>
        <button className="btn deleteBtn" onClick={deleteHandler}>Delete</button>
      </div>
    </div>
  );
};

export default Todo;
