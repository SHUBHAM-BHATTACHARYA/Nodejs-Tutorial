const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What is your Name? ', (name) =>{
    console.log(`Hello ${name}`);
    rl.close(); // Important: closes the interface and allows the program to exit
});

rl.on('close', () =>{
    console.log('exit');
    process.exit(0);
})