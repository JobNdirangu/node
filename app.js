// how to to import modules in node
// you must have installed it 
// we use npm i package_name or npm install package _name
const chalk=require("chalk") //traditional or common js

// "type": "module",
// import chalk from 'chalk'   modern way ES module

const welcome =require("./welcome")
const math =require("./mathUtils")
const string =require("./stringUtil")

console.log("Starting my first node project..")
console.log(chalk.green("My green Welcome note"))
welcome.sayHello()

// maths
// add, subtraction,math.multiply,power 
console.log(chalk.yellow(welcome.companyName))
console.log(chalk.yellow(math.power(5)))

// assignment 2
// string.capitalize
// string.lower
// string.countWords
console.log(chalk.bgCyan(string.countWords("job ndirangu")))


