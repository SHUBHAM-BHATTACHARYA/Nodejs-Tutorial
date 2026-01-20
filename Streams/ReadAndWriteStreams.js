var fs = require('fs');

var readableStream = fs.createReadStream('Read.txt');
var writeableStream = fs.createWriteStream('ReadAndWriteStream.txt');

var content = '';
readableStream.setEncoding('utf-8');
readableStream.on('data', (chunk)=>{
    content += chunk;
    writeableStream.write(content, 'utf-8');
});

readableStream.on('end', () =>{
    writeableStream.end();
});

readableStream.on('error', (error) =>{
    console.error('Error reading file:', error);
});

writeableStream.on('error', (error)=>{
    console.log('Error in writing file:', error);

});
