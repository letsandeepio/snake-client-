let connection;

const handleEndInput = (data) => {
  if (data === '\u0003') {
    process.exit();
  }
};

const messages = [
  'HEY COMRADES',
  'This is fun',
  'Victory is mine',
  'HAKUNA MATATA!!!',
  'UNSTOPPBALE',
  'BULL DOZER',
  'GET OUT OF MY WAY',
  'TERMINATOR',
  'I MA BACK'
];

const inputKey = {
  w: 'up',
  a: 'left',
  s: 'down',
  d: 'right'
};

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleEndInput);
  stdin.on('data', function (data) {
    if (inputKey[data]) {
      console.log(inputKey[data]);
      connection.write('Move: ' + inputKey[data]);
    }
    if (data === 'q') {
      connection.write(
        'Say: ' + messages[Math.floor(Math.random() * messages.length)]
      );
    }
  });
  return stdin;
};

module.exports = { setupInput };
