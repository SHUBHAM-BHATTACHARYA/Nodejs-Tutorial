/* 

 Use https module to make requests to https://en.wikipedia.org/443//wiki/Nodejs and 
 write the source code of the page into "Node.html" 
 
 The Node.html file should be created only when the contents are getting written into it

 */

const https = require('https');
var fs = require('fs');

const options = {
    hostname: 'en.wikipedia.org',
    port: 443,
    path: '/wiki/Nodejs',
    method: 'GET',
    headers: {
        'User-Agent': 'Node.js-Example-Script'
    }
}

const req = https.request(options, (res) =>{
    let content = '';

    res.on('data', (chunk) =>{
        content += chunk;
    })

    res.on('end', () =>{
        try{
            fs.writeFile('Node.html', content, (err)=>{
                if(err){
                    return;
                }
            });
        } catch(err){
            console.error(err.message)
        }
    });
})

req.on('error', (err) =>{
    console.error(err)
});

req.end();