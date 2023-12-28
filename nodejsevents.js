const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter { }

const myEmitter = new MyEmitter();
myEmitter.on('WaterFull', () => {
    console.log('Turn off the motor!');
    setTimeout(() => {
        console.log('Please Turn off the motor. It is a gentle reminder');
    }, 3000)
});


console.log("This is a running script");
myEmitter.emit('WaterFull');
console.log("Still this is a running script");
