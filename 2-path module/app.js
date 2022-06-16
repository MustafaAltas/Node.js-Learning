const path = require("path")

const result = path.resolve("app.js");
console.log(result);

const result2 = path.extname(__filename);

const result3 = path.parse(__filename);

console.log(result3);
console.log(result3.root);
console.log(result3.ext);