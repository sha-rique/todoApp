let express = require('express');
let app=  express();

// configuration env file se lena
require('dotenv').config();
PORT = process.env.PORT || 4000;

// middleware to parse JSON bodies
let bodyParser = require('body-parser');
app.use(bodyParser.json());



// middleware to parse JSON bodies
app.use(express.json());


// database ke sath connection
// let dBconnect = require('./config/database');

// dBconnect();

// import routes for TODO API
let todoRoutes = require('../routes/todo');

// mounting routes of TODO API
app.use('/api/v1/todo', todoRoutes);


// listening to server
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})

// default routes
app.get('/', (req, res) => {
    res.send('Welcome to the Todo App API');
});