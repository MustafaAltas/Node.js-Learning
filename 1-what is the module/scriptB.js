//IIFE

// var controllerB = (function() {
//     var firstName = "Altaş";

//     var log = function() {
//         console.log(this.firstName);
//     }

//     return {
//         firstName,log
//     }
// })();

// console.log(controllerA.firstName);
// console.log(controllerB.firstName);

const scriptA = require("./scriptA.js");

console.log(scriptA.name);