let Todo = require("../backEnd/models/todo");

exports.updateTodo = async (req, res) => {
  try {
    let id = req.params.id;
    let { title, description } = req.body;

    let todoItem = await Todo.findByIdAndUpdate(
      { _id: id },
      {
        title,
        description,
        updatedAt: Date.now(),
      }
    );
    if (!todoItem) {
      return res.status(404).json({
        success: false,
        message: `Todo item not found for id: ${id}`,
      });
    }
    res.status(200).json({
      success: true,
      data: todoItem,
      message: "Todo item updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
      message: "Error while updating todo item",
    });
  }
};
