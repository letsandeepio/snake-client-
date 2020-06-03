const handleEndInput = (data) => {
  if (data === '\u0003') {
    process.exit();
  }
};

const inputKey = {
  w: 'Up',
  a: 'Left',
  s: 'Down',
  d: 'Right'
};

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleEndInput);
  stdin.on('data', function (data) {
    if (inputKey[data]) {
      console.log(inputKey[data]);
    }
  });
  return stdin;
};

module.exports = { setupInput };
