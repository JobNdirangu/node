const fs = require('fs');

// Import the built-in 'zlib' module for compression (gzip, deflate, etc.)
const zlib = require('zlib');

/**
 * This block performs a chained stream operation:
 * - Reads the contents of 'input.txt'
 * - Compresses it using Gzip
 * - Writes the compressed result to 'input.txt.gz'
 */

// Step 1: Create a readable stream from 'input.txt'
fs.createReadStream('input.txt')          // This stream emits 'data' events as chunks of the file are read

  // Step 2: Pipe the readable stream through a gzip transform stream
  // 'createGzip()' returns a transform stream that compresses data using Gzip algorithm
  .pipe(zlib.createGzip())

  // Step 3: Pipe the compressed data to a writable stream that writes to 'input.txt.gz'
  // This stream receives the compressed chunks and writes them to disk
  .pipe(fs.createWriteStream('input.txt.gz'))

  // Step 4: Listen for the 'finish' event on the writable stream
  // This event is triggered when all data has been flushed and writing is complete
  .on('finish', () => {
    // Log a confirmation message to the console when the process is done
    console.log('File successfully compressed.');
  });
