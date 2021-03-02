const express = require('express');  
const app = express();  

const server = require('http').createServer(app);  
const io = require('socket.io')(server);



//For Cheking server is initislised correctly
app.get('/', function (req, res) {
  res.send('Server Initialised')
})

//For Cors Origin error
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "https://www.differentServerDomain.fr https://www.differentServerDomain.fr");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



io.on('connection', function(socket) {
  console.log('connected socket!');

  socket.on('greet', function(data) {
    console.log(data);
    socket.emit('respond', { hello: 'Hey, Mr.Client!' });
  });
  socket.on('disconnect', function() {
    console.log('Socket disconnected');
  });
});



const PORT = 5000 || process.env.PORT;


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});