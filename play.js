const { connect } = require('./client');

console.log('Connecting ...');
connect();

/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */

const handleEndInput = (data) => {
  if (data === '\u0003') {
    process.exit();
  }
};

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleEndInput);
  stdin.on('data', function (data) {
    console.log(data);
  });
  return stdin;
};

setupInput();
