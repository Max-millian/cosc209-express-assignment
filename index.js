const express = require('express')

const app = express()

port = 5000

app.get('/',(request,response)=>{
    response.send("welcome to express server")
})

app.get('/dashboard',(req,res)=>{
    res.send("this is your dashboard")
})

app.get('/Blog',(req,res)=>{
    res.send("this is your blog page")
})
app.post('/submit',(res,req)=>{
    res.send("submit")
})

app.listen(port,()=>{
    console.log("app is running successfully")
})