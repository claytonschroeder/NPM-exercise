var chalk = require("chalk");

var message = chalk.red.bgBlue("Hello") + chalk.bgYellow(" ") + chalk.yellow.bgGreen("World");
console.log(message);

var message2 = chalk.blue.bgYellow.bold("Go ") + chalk.blue.bgYellow.bold("UBCO");
console.log(message2);