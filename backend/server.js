const app = require("./app")
const connectDatabase = require("./config/database")
const dotenv= require('dotenv')

// Handle Uncaught exception
process.on('uncaughtException',err=>{
    console.log(`ERROR:${err.message}`)
    console.log('SHutting down server')
    process.exit(1)
})

dotenv.config({path:'backend/config/config.env'})



// Connecting to databse
connectDatabase()

const server = app.listen(process.env.PORT,()=>{

    console.log(`server started on port :${process.env.PORT} in ${process.env.NODE_ENV} mode.`)
})

process.on('unhandledRejection',err=>{
    console.log(`Error:${err.message}`)
    console.log('Shutting down the server due to ungandled rejection')
    server.close(()=>{
        process.exit(1)
    })
})