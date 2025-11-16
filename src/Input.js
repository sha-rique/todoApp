const Input = ({ showHandler, changeHandler, submitHandler, inputValue }) => {
  return (
    <form className="input-container" onSubmit={submitHandler}>
      <input
        type="text"
        className="input"
        onChange={changeHandler}
        value={inputValue}
        placeholder="Enter your todo..."
      />
      <div className="button-container">
        <button className="btn saveBtn" type="submit">
          Save
        </button>
        <button className="btn cancelBtn" onClick={showHandler}>
          Cancel
        </button>
      </div>
    </form>
  );
};
export default Input;
