let todo= require('../models/todo');

exports.deleteTodo = async (req, res) => {
    try{
        let id = req.params.id;
        let todoItem = await todo.findByIdAndDelete({_id: id});
        if(!todoItem){
            return res.status(404).json({
                success: false,
                message: `Todo item not found for id: ${id}`,
            });
        }
        res.status(200).json({
            success: true,
            data: todoItem,
            message: `Todo item with Id: ${id} has been deleted successfully`,
        });
    }
    catch (error) {
        res.status(500).json({
            error: error.message,
            message: 'Error while deleting todo item',
        });
    }
}