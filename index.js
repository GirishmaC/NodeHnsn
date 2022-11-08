// const http = require ('http');
// const server = http.createServer((req,res)=>{
//     res.write("<h1>Hi, Hlo world</h1>")
//     res.end()
// })
// server.listen(8000,()=>
// console.log('App is running')
// )

const express = require('express');
const app = express();
app.get('/', (req, res)=>{
    res.send('Hello');
})
app.get('/api/main', (req, res)=>{
    res.send('Hiiiiii');
})
app.listen(3000,()=>{
    console.log('Launching of Express Server!!!');
})