require('dotenv').config()

const express = require("express")

const app = express();

const port = 3000

app.get('/', (req, res)=>{
    res.send("Hello ji kaisi ho sare, This is not love babbar.This is mukul bhatt learning backend from Hitesh Choudary")
})

app.listen(process.env.PORT, ()=> console.log(`Server running at port: ${process.env.PORT}`))