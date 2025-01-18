const fs = require('node:fs');
const path = require('path');

fs.readdir(
  path.join(__dirname, '/secret-folder'),
  { withFileTypes: true },
  (err, files) => {
    if (err) {
      console.log(err);
    } else {
      console.log('\nCurrent files');
      files.forEach((file) => {
        fs.stat(`${file.path}/${file.name}`, (err, stats) => {
          if (err) {
            console.log(err);
          } else {
            const parsed = path.parse(file.name);
            console.log(
              `${parsed.name} - ${path.basename(parsed.ext, '.')} - ${
                stats.size
              }`,
            );
          }
        });
      });
    }
  },
);
