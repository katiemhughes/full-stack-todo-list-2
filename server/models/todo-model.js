const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId
    },
    taskName: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model("Todo", todoSchema);