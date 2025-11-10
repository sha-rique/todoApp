let express = require('express');
let router = express.Router();

// hamne controller ko import kiya hai
let { createTodo } = require('../controllers/createTodo'); 
let { getTodo, getTodoById } = require('../controllers/getTodo'); 
let {updateTodo} = require('../controllers/updateTodo');
let {deleteTodo} = require('../controllers/deleteTodo');


// maping of API routes
router.post('/createTodo', createTodo);
router.get('/getTodo', getTodo);


// dynamic route parameter , yahan pr so bhi id hm pass karenge... wo id (varaible me store ho jayega)
router.get('/getTodo/:id', getTodoById);
router.put('/updateTodo/:id', updateTodo);
router.delete('/deleteTodo/:id', deleteTodo);


module.exports = router;