//IIFE


// var controllerA = (function() {
//     //private
//     var firstName = "Mustafa";

//     var log = function() {
//         console.log(this.firstName);
//     }

//     //public :: dışarı açılan değerler
//     return {
//         firstName,
//         log
//     }
// })();

let firstName = "Mustafa";

const log = (isim) => {
    console.log(isim);
}

// module.exports.name = firstName;
// module.exports.log = log;



//şeklinde de kullanılabilir.
module.exports = {
    firstName,
    log
}