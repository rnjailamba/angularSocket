var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static(__dirname + '/public'));

io.on('connection', function(socket) {
  console.log('new connection');

  socket.on('add-customer', function(customer) {
    io.emit('notification', {
      message: 'new customer',
      customer: customer
    });
  });
});

server.listen(4041, function() {
  console.log('server up and running at 4041 port');
});