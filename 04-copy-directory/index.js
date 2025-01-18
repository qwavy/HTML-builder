const fs = require('node:fs');
const path = require('path');

const { copyFile } = require('node:fs/promises');

fs.mkdir(path.join(__dirname, 'files-copy'), { recursive: true }, (err) => {
  if (err) {
    return console.error(err);
  }
  fs.readdir(
    path.join(__dirname, '/files'),
    { withFileTypes: true },
    (err, files) => {
      if (err) {
        console.log(err);
      } else {
        files.forEach((file) => {
          console.log(file);
          copyFile(
            path.join(file.path, file.name),
            path.join(__dirname, `files-copy/${file.name}`),
          );
        });
      }
    },
  );
});
