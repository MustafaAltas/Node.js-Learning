// const EventEmitter = require("events");
// const emitter = new EventEmitter(); // object oluşturuldu.

// // listener kayıt et
// emitter.on("connection",function(args){
//     console.log("bağlantı gerçekleştirildi",args);
// });

// //event'i tetikle

// emitter.emit("connection",{id:1,mesaj:"Hello"})

const Logger = require("./logger");
const logger = new Logger();

logger.on("connection",function(args){
    console.log("Bağlantı Kuruldu",args);
});

logger.log("Gİriş yapıldı.")