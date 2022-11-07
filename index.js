// const http = require ('http');
// const server = http.createServer((req,res)=>{
//     res.write("<h1>Hi, Hlo world</h1>")
//     res.end()
// })
// server.listen(8000,()=>
// console.log('App is running')
// )
const http = require('http');
const data = {
    firstName:'Girishma',
    lastName:'Cirigiri',
    Age:24,
    Prof:'Developer'

}
const server = http.createServer((req,res)=>{
    res.write('<h1>Details</h1>');
    res.write(JSON.stringify(data));
    res.end();
});

server.listen(8000);


