const fs = require('fs'); // (File System) module to work with files 
// 'utf8' encoding ensures we get readable text instead of raw buffer data 
const readStream = fs.createReadStream('input.txt', 'utf8'); 
// This event is triggered every time a chunk of data is available 
readStream.on('data', (chunk) => { 
console.log('Data received:\n', chunk); // Log the chunk to the console 
const newText= chunk.trim().toUpperCase()
console.log(newText)
}); 
// This event is triggered when the entire file has been read 

readStream.on('end', () => { 
console.log('Done reading the file.'); // Log completion message 
});