var events = require('events');
var eventEmitter = new events.EventEmitter();

var connectHander = function connected() {
    console.log('connected');
    eventEmitter.emit('data_received');
}

eventEmitter.on('connection', connectHander);
eventEmitter.on('data_received', function() {
    console.log('data received successfully');
});

eventEmitter.emit('connection');

console.log('Program ended');