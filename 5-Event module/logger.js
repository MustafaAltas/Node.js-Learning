const EventEmitter = require("events");

class Logger extends EventEmitter {
    log(msj){
        console.log(msj);

        this.emit("connection", {
            id:1,
            mesaj : "Merhaba"
        })
    }
}
module.exports = Logger;