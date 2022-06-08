const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var todoSchema = new Schema({
  _id: {
    type: Number,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

var Todos = mongoose.model('todo', todoSchema);

module.exports = Todos;
