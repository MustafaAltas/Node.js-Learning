const fs = require("fs");

const files = fs.readdir("./", function(error,data) {
    if (error) {
        console.log(error);
    }else {
        console.log(data);
    }
})

const data = fs.readFile("index.html", "utf8", function(error,data) {
    if (error) {
        console.log(error);
    }else{
        console.log(data);
    }
})

fs.writeFile("deneme.txt","Merhaba Dünya",function(error){
    if (error) {
        console.log(error);
    }
});

fs.appendFile("deneme1.txt","Merhaba Arkadaşlar",function(error){
    if (error) {
        console.log(error);
    }
})
fs.appendFile("deneme1.txt","Merhaba gençler",function(error){
    if (error) {
        console.log(error);
    }
});

// fs.rename("deneme1.txt","deneme2.txt",function(err){
//     if (err) {
//         console.log(err);
//     }
// })

fs.unlink("deneme.txt",function(error){
    if (error) {
        console.log(error);
    }else{
        console.log("Dosya Silindi!!!");
    }
})