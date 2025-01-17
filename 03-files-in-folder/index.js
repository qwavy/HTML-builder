const fs = require('node:fs');

fs.readdir(
  'C:\\Users\\admin\\Desktop\\college\\rsschool\\HTML-builder\\03-files-in-folder\\secret-folder',
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
          }else{

            console.log(file.name, stats.size)
          }
        });
      });
    }
  },
);
