const events = require('events');

let emitter = new events.EventEmitter();

emitter.on('customEvents', (message, user) =>{
    console.log(`${user}: ${message}`)
})

emitter.on('Error', (err)=>{
    console.error(err);
})

emitter.emit("customEvents", "Hello", "Shubham");
emitter.emit("customEvents", "Hello", "Hemant");

process.stdin.on('data', (input) =>{
    input = input.toString().trim()
    if(input === "exit"){
        emitter.emit("customEvents", "Good Bye!", "Process");
        process.exit();
    }
    emitter.emit("customEvents", input, "Terminal");
})