const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    taskName: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        default: false
    }
});
//the following code gives us access to the todo model in this file.
const Todo = (module.exports = mongoose.model("Todo", todoSchema));

module.exports.get = function (callback, limit) {
    console.log(limit)
    Todo.find(callback).limit(limit)
}