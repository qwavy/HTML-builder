const fs = require('node:fs');

fs.readFile(
  'C:\\Users\\admin\\Desktop\\college\\rsschool\\HTML-builder\\01-read-file\\text.txt',
  'utf8',
  (err, data) => {
    if (err) {
      return err;
    }
    console.log(data);
  },
);
