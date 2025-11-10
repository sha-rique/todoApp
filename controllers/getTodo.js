let Todo = require('../models/todo');

exports.getTodo = async (req,res) => {
    try{
        // sare todo item fetch ho gaye
        let todos = await Todo.find({});
        res.status(200).json({
            success: true,
            data: todos,
            message: 'Todos fetched successfully',
        });
    }
    catch(error){
        res.status(500).json({
            error: error.message,
            message: 'Internal Server Error',
        });
    }
}

exports.getTodoById = async (req,res) => {
    try{
        let todoId = req.params.id;
        let todoItem = await Todo.findById({_id: todoId});
        if(!todoItem){
            return res.status(404).json({
                success: false,
                message: `Todo item not found for id: ${todoId}`,
            });
        }
        res.status(200).json({
            success: true,
            data: todoItem,
            message: 'Todo item fetched successfully',
        });
    }
    catch(error){
        res.status(500).json({
            error: error.message,
            message: 'Internal Server Error',
        })
    }
}
