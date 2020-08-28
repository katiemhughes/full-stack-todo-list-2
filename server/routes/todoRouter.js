const todoRouter = require("express").Router();

const todoCtrl = require("../controllers/todo-ctrl");

//post a todo

todoRouter.route("/todos")
    .post(todoCtrl.addTodo)

//todoRouter.post("/todos", (req, res) => {
    //res.send("You have posted a todo")
//})

//get all tasks

todoRouter.route("/todos")
    .get(todoCtrl.getAllTodos)

//todoRouter.get("/todos", (req, res) => {
    //res.send("You have retrieved all your todos")
//})

//get a particular task
//todoRouter.get("todos/:id", (req, res) => {
    //res.send(`You have requested for ${req.params.todo}`)
//})

//update todo function
//todoRouter.route("/todos/:id")
    //.put(updateTodo)

//delete todo function
//todoRouter.route("/todos/:id")
    //.delete(deleteTodo)

//todoRouter.route("/todos/todoname")
    //.get(sendTodo)
    //.delete(removeTodo);

//todo("/", todoCtrl.createItem)
//todoRouter.get("/", todoCtrl.getTodos);

module.exports = todoRouter;