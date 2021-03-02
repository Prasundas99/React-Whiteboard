const http = require("http");
const WebSocketServe = require("websocket").server;
let connection = null;

const httpserver = http.createServer((req,res) => {
    console.log("We have recive a request")
})

const websocket = new WebSocketServe({
    //For handshake
    "httpServer": httpserver
})

websocket.on("request", request=>{

    //here we decide as server that we want to accept it or not better to say switching protocol
    connection = request.accept(null, request.origin)
     //Taken null for example bt it should have something protocol for acceptance the server cannot accept just any websocket then it will be security vulnerable

     connection.on("open", () => console.log("opened"))
     connection.on("close", () => console.log("Closed"))
     //any function can be written here according to business logic
     //For example
     createConnection.on("message", message => {
         console.log(`Recived message ${message.utf8Data}`)
     })

})             


httpserver.listen(8080, () => console.log("Server listening at port 8080"))
