const fs = require('node:fs');

const path = require('path');
const { copyFile } = require('node:fs/promises');

const filePath = path.join(__dirname, '/project-dist');

fs.mkdir(filePath, { recursive: true }, (err) => {
  if (err) {
    return console.log(err);
  }

  copyCSS();
});

// merge css
function addFiles(files) {
  files.forEach((file) => {
    if (path.extname(file.name) === '.css') {
      fs.readFile(path.join(file.path, file.name), 'utf8', (err, data) => {
        fs.appendFile(
          path.join(__dirname, '/project-dist', 'style.css'),
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

function copyCSS() {
  fs.writeFile(path.join(filePath, 'style.css'), '', (err) => {
    if (err) {
      console.error(err);
      return;
    }
    readCss('/styles');
  });
}

// copy assets
fs.mkdir(path.join(filePath, 'assets'), { recursive: true }, (err) => {
  if (err) {
    return console.error(err);
  }
  fs.readdir(
    path.join(__dirname, '/assets'),
    { withFileTypes: true },
    (err, files) => {
      if (err) {
        console.log(err);
      } else {
        files.forEach((file) => {
          fs.stat(path.join(file.path, file.name), (err, stats) => {
            if (err) {
              console.log(err);
              return;
            }
            if (stats.isDirectory()) {
              copyFilesFromDirectory(
                path.join(file.path, file.name),
                file.name,
              );
            }
          });
        });
      }
    },
  );
});

function copyFilesFromDirectory(files, filesName) {
  fs.mkdir(
    path.join(filePath, 'assets', filesName),
    { recursive: true },
    (err) => {
      if (err) {
        console.log(err);
        return;
      }
    },
  );
  fs.readdir(files, (err, file) => {
    file.forEach((el) => {
      copyFile(
        path.join(__dirname, 'assets', filesName, el),
        path.join(filePath, 'assets', filesName, el),
      );
    });
  });
}
