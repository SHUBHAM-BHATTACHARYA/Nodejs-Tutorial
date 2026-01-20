/* 
    1. Write a timer function to log "Logging {stringToLog} every 0.5 seconds" 0.3 second after the server is started.
    2. Write a timer function to log "{stringToLog}"  every 0.5 seconds, and the string should log 5 times.
    3. Once the code is written, click Run Tests to run the test Cases. 
*/



process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";

process.stdin.on("data", function(chunk){
    _input += chunk;
    console.log("Logging "+_input + " every 0.5 seconds");
});

process.stdin.on("end", function(){
    logString(_input);
});

function logString(stringToLog){
    console.log(stringToLog);
}

count = 0;
setTimeout(() =>{
    const interval = setInterval(() =>{
        logString(_input)
        count ++;
        if(count === 4){
            clearInterval(interval);
        }
    }, 500)
}, 300)