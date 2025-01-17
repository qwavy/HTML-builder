const fs = require("node:fs")
const path = require("path")


fs.mkdir(path.join(__dirname, 'files-copy'),
    (err) => {
        if (err) {
            return console.error(err);
        }
        console.log('Directory created successfully!');
    });