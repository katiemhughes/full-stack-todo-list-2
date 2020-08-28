const apiRouter = require("express").Router();
//const todoCtrl = require("../controllers/todo-ctrl");
const {getAllTodos, addTodo} = require("../controllers/todo-ctrl");

//post a todo

apiRouter.route("/todos")
    .post(addTodo)
    .get(getAllTodos)
    .all((req, res, next) => {
        res.status(405).send("Method not allowed")
    });
//todoRouter.post("/todos", (req, res) => {
    //res.send("You have posted a todo")
//})

//get all tasks
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

module.exports = apiRouter;