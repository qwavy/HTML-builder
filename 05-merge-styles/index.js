const fs = require('node:fs');
const path = require('path');

function addFiles(files) {
  files.forEach((file) => {
    if (path.extname(file.name) === '.css') {
      fs.readFile(path.join(file.path, file.name), 'utf8', (err, data) => {
        fs.appendFile(
          path.join(__dirname, '/project-dist', 'bundle.css'),
          data,
          (err) => {
            if (err) {
              console.log(err);
              return;
            }
          },
        );
      });
    }
  });
}

function readCss(folderName) {
  fs.readdir(
    path.join(__dirname, folderName),
    { withFileTypes: true },
    (err, files) => {
      if (err) {
        console.log(err);
      }
      addFiles(files);
    },
  );
}

fs.writeFile(path.join(__dirname, '/project-dist', 'bundle.css'), '', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  readCss('/styles');
});

