const fs = require('fs');

let charCount = 0; // Total character counter

// Create a readable stream to read 'input.txt' as UTF-8 text
const readStream = fs.createReadStream('input.txt', 'utf8');

// Listen for 'data' events - emitted as chunks of the file are read
readStream.on('data', (chunk) => {
  // Add the number of characters in this chunk to the total
  charCount += chunk.length;
  console.log(`Total characters in file: ${chunk.length}`)
});

// When reading ends
readStream.on('end', () => {
  console.log(`Total characters in file: ${charCount}`);
});

// Handle errors (e.g., file not found)
readStream.on('error', (err) => {
  console.error('Error reading file:', err.message);
});
