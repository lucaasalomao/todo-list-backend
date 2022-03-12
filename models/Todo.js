const { Schema } = require('mongoose') 

const Todo = new Schema (
    { title: String, completed: Boolean},
    { timestamps: true }
)

module.exports = Todo