const http = require('http');
const fs = require('fs');

const server=http.createServer((req,res)=>{
    fs.readFile('home.html',(err,data)=>{
        if (err){
            res.writeHead(500,{"content-type":"plain/text"})
        }
        res.writeHead(200,{'content-type':'html'})
        res.end(data)
    })

})

server.listen(3000,()=>{
    console.log("server running")
})