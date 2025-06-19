const fs = require('fs'); 
// Create readable and writable streams 
const readerStream = fs.createReadStream('input.txt'); 
const writerStream = fs.createWriteStream('output.txt'); 
// Pipe reader to writer 
readerStream.pipe(writerStream); 
console.log("File copied!"); 