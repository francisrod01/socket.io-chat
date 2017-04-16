var app = require('express')()
var http = require('http').Server(app)
var io = require('socket.io')(http)

app.get('/', function (req, res) {
    // res.send('<h1>Hello world</h1>')
    res.sendFile(__dirname + '/index.html')
})

io.on('connection', function (socket) {
    console.log('a user connected!');

    // In order to send an event to everyone, Socket.IO gives us the `io.emit`.
    // io.emit('some event', { for: 'everyone'});

    // If you want to send a message to everyone, except for a certain socket,
    // we have the `broadcast` flag:
    socket.broadcast.emit('hi human! :)');

    // In this case, for the sake of simplicity we'll send the message to everyone,
    // including the sender.
    socket.on('chat message', function (msg) {
        console.log('message: ' + msg)

        io.emit('chat message', msg)
    })

    socket.on('disconnect', function () {
        console.log('user disconnected!')
    })
})

http.listen(3000, function () {
    console.log('listening on *:3000')
})
