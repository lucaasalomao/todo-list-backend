/* db connection */
const connect = require("./config/db.config")
connect()

/* routing and controllers - express*/

const express = require('express')
const app = express()
app.use(express.json())

/* Get All Todos form DB */

app.get("/todos", async (request, response) => {
    response.status(200).json(request.body)
})

/* Create New Todo */

app.post("/todos", async (request, response) => {
    response.status(201).json(request.body)
})

/* Update Existing Todo by Id - {"title":String, "completed": Bollean}*/

app.put("/todos/:id", async (request, response) => {
    response.status(200).json(request.body)
})

/* Deletes todo */

app.delete("/todos/:id", async (request, response) => {
    response.status(204)
})


app.listen(3000, () => console.log("Servidor rodando na porta 3000"))