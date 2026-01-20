/* 
    1. The variable input has the input value. The value contains two numbers(n1 and n2). Extract n1 and n2 from the input.
    2. Write a function to find the sum of all the multiples of n1 and n2. The multiples should be less than or equal to 1000.
        This function should be log the sum after 2 seconds.
    3. Register an event named MyEvent for any instance of an event emitter, and bind a function named logInfo to it, which logs 
        "Multiples of {n1} & {n2}" to the console and emit the event.
*/



process.stdin.resume();
process.stdin.setEncoding("ascii");
var input = "";
process.stdin.on("data", function(chunk) {
    input += chunk
});

const EventEmitter = require('events');
const emitter = new EventEmitter();

process.stdin.on("end", function(){
    const inputArr = input.split(' ').map(Number);
    num1 = inputArr[0];
    num2 = inputArr[1];
    console.log(num1)
    console.log(num2)

    const sumOfMultiples = (num1, num2) =>{
        let total = 0;
        for(let i=0; i<1000; i++){
            if((num1 * i) <= 1000){
                total += (num1 * i)
            } else{
                break;
            }
        }
        for(let j=0; j<1000; j++){
            if((num2 * j) <= 1000){
                total += (num2 * i)
            } else{
                break;
            }
        }
        console.log(total)
    }
    setTimeout(()=>{
        sumOfMultiples(num1, num2);
    }, 2000);

    emitter.on('MyEvent', () =>{
        console.log("multiples of "+inputArr[0]+" & "+inputArr[1]);
    });
    emitter.emit('MyEvent');
});

