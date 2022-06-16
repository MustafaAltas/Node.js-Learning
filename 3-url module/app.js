const url = require("url");

const address = "https://nodejs.org/dist/latest-v16.x/docs/api/path.html"

const result = url.parse(address,true);

console.log(result);
console.log(result.host);
console.log(result.path);
console.log(result.query);