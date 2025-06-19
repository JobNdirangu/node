
const fs = require('fs'); 
// Create a writable stream 
const writerStream = fs.createWriteStream('output.txt'); 
// Write some data 
writerStream.write("Hello, World!\n", 'utf8'); 
// More data 
writerStream.write("Welcome to Node.js Streams\n"); 
// Mark end of file 
writerStream.end(); 
// When writing finishes 
writerStream.on('finish', () => { 
console.log("Data successfully written to output.txt"); 
}); 
// Handle errors 
writerStream.on('error', (err) => { 
console.error("Error writing file:", err); 
}); 