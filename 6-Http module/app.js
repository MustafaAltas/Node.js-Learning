const http = require("http");
const server = http.createServer((request,response) =>{
    if (request.url === "/") {
        response.write("Merhaba Anasayfa");
        response.end();  
    }

    if (request.url === "/product") {
        response.write("Product sayfası");
        response.end();
    }
});

server.listen("3000");