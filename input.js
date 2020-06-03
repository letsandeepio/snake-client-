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

module.exports = { setupInput };
