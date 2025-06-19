const http = require('http');
const fs = require('fs');


const server=http.createServer((req,res)=>{
   
    res.writeHead(200,{'content-type':'html'})
    res.end("Node js ")

})

server.listen(3000,()=>{
    console.log("server running")
})