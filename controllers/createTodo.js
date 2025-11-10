let Todo = require('../models/todo');

exports.createTodo = async (req, res) => {
    try {
        let { title, description } = req.body;
        
        let response = await Todo.create(
            {
                title,
                description
            }
        );
        
        
        res.status(201).json({
            success: true,
            data: response, 
            message: 'Todo created successfully',
        });
    } catch (error) {
        res.status(500)
        .json({
            // message: 'Error creating todo',
            error: error.message,
            console: console.log("  Error h bhai"),
            // message: 'Internal Server Error',
        });
    }
}