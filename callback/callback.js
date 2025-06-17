// non blocking
const fs = require("fs"); 
const chalk =require("chalk")

fs.readFile('input.txt', function (err, data) { 
    console.log(chalk.redBright(data.toString()));
    
}); 
console.log("Finished input long Program Ended");

// fs.readFile('input.txt', function (err, data) { 
    
//     console.log(chalk.blueBright(data.toString())); 
// }); 
// console.log("Finished input short Program Ended");