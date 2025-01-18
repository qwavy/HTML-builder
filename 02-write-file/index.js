const fs = require('node:fs');

const { stdin: input, stdout: output } = require('node:process');
const process = require('node:process');
const readline = require('node:readline');

let message = '';

const rl = readline.createInterface({ input, output });

rl.question('', (answer) => {
  if (answer === 'exit') {
    console.log(message);
    rl.close();
  } else {
    message += answer;
  }
});

rl.on('line', (input) => {
  if (input === 'exit') {
    console.log(message);
    rl.close();
  } else {
    message += input;
  }
});

process.on('beforeExit', () => {
  console.log('Process beforeExit event with code: ', message);
});
