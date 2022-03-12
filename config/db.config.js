/* environment variables import */
require('dotenv').config()

/* db connection */
const mongoose = require('mongoose')

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Conectado ao db..")
    } catch (error) {
        console.log("Erro na conexão com o db: ", error)
    } 
}

module.exports = connect