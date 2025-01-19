const fs = require('node:fs');
const path = require('path');

const rr = fs.createReadStream(path.join(__dirname, 'text.txt'));

rr.on("data", (chunk) => {
    console.log(String(chunk))
})

rr.on("error",(error) => {
    console.log(error)
})