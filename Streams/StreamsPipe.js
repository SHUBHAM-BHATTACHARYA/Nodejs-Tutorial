const fs = require('fs');
var readableStream = fs.createReadStream('Read.txt');

var writeableStream = fs.createWriteStream('StreamsPipeWrite.txt');

readableStream.pipe(writeableStream);

readableStream.on('error', (error) =>{
    console.error('Error reading file:', error);
});

writeableStream.on('error', (error)=>{
    console.log('Error in writing file:', error);

});