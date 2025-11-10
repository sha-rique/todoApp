let mongoose= require ('mongoose');

let userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        require: true,
        trime: true
    },
    lastname: {
        type: String,
        require: true,
        trime: true
    },
    email: {
        type: String,
        require: true,
        trim: true,

    }
})