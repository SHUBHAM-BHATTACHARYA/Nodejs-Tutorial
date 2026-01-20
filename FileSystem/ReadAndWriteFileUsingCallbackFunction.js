const fs = require('fs');

fs.readFile('Read.txt', 'utf8', (err, data) => {
    if(err){
        console.error("Error Reading file ", err);
        return;
    }
    fs.writeFile('ReadAndWriteFile.txt', data, (err) =>{
        if(err){
            console.error("Error writing file ", err);
            return;
        }
        console.log("successfully completed writing the file");
    })
})
