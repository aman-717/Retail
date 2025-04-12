const express = require("express");
const todocontroller = require("../controllers/todo.controller.js");
const router = express.Router();
router.route("/create").post(todocontroller.createTodo);
router.route("/fetch").get(todocontroller.getTodos);
router.route("/update/:id").put(todocontroller.updateTodo);
router.route("/delete/:id").delete(todocontroller.deleteTodo);
module.exports = router;
