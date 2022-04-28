const mongoose = require('mongoose')

const connectDatabase = ()=>{
    mongoose.connect(process.env.DB_URI,{

useNewUrlParser:true,

}).then(()=>{
    console.log("connection successful")
}).catch((e)=>{
console.log("No Connection")
})
}

module.exports = connectDatabase