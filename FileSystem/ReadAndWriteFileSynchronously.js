const fs = require('fs');

try{
    const data = fs.readFileSync('Read.txt', 'utf-8');
    fs.writeFileSync('WriteSynchronously.txt', data);
} catch(err) {
    console.error("An error occurred ", err.message);
}