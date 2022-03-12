/* db connection */
const connect = require("./config/db.config")
connect()

/* Todo model import */
const { Todo } = require("./models/Todo")

/* routing and controllers - express*/

const express = require('express')
const app = express()
app.use(express.json())

/* Get All Todos form DB */

app.get("/todos", async (request, response) => {
    try {
        const allItems = await Todo.find()
        response.status(200).json(allItems)
    } catch (error) {
        response.status(500).json({ message: error.message})
    }
})

/* Create New Todo */

app.post("/todos", async (request, response) => {
    try {
        const newItem = await Todo.create(request.body)
        newItem.save()
        response.status(201).json(request.body)
    } catch (error) {
        response.status(500).json({ message: error.message})
    }
})

/* Update Existing Todo by Id - {"title":String, "completed": Bollean}*/

app.put("/todos/:id", async (request, response) => {
    try {
        await Todo.findOneAndUpdate({ _id: request.params.id }, request.body)
        response.status(200).json(request.body)
    } catch (error) {
        response.status(500).json({ message: error.message})
    }
})

/* Deletes todo */

app.delete("/todos/:id", async (request, response) => {
    try {
        await Todo.deleteOne({ _id: request.params.id })
        response.status(204)
    } catch (error) {
        response.status(500).json({ message: error.message})
    }
})

app.listen(3000, () => console.log("Servidor rodando na porta 3000"))