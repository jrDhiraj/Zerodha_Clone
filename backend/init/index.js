require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose');
const {HoldingModel} = require("../models/HoldingModel")
const {PositionsModel} = require("../models/PositionsModel")
const initData = require ('./data')

app.get('/', function (req, res) {
    
    res.send('Hello World')
})



 
const DBURL = "mongodb+srv://jrdhiraj8651:KMd4JkE3dlzyplhH@cluster0.byhk7.mongodb.net/zorodha?retryWrites=true&w=majority&appName=cluster0";

main().then(()=>{
    console.log("connected to db")
})
.catch(err => console.log(err));
async function main() {
  await mongoose.connect(DBURL);

}  


// 



const initDb = async () => {

    await PositionsModel.insertMany(initData.data)
    console.log('Database initialized PositionsModel')
}

initDb()



const PORT = process.env.PORT || 3000;
app.listen(PORT , () =>{
    console.log("App is running on port 3000")
    console.log("App started")
})