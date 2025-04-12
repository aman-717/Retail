const Todo = require("../model/todo.model.js");
const createTodo = async (req, res) => {
  const todo = new Todo({
    text: req.body.text,
    completed: req.body.completed,
  });
  try {
    const newTodo = await todo.save();
    res.status(201).json({
      success: true,
      message: "Todo created Successfully",
      todo,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: "Failed to create todo",
    });
  }
};
const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(201).json({
      success: true,
      message: "Todos fetched successfully",
      todos,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch todos",
    });
  }
};
const updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      success: true,
      message: "Todo updated successfully",
      todo,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: "Failed to update todo",
    });
  }
};
const deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);
    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "Todo Not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Todo deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: "Failed to delete todo",
    });
  }
};
module.exports = { createTodo, getTodos, updateTodo, deleteTodo };
