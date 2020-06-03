const net = require('net');

const connect = function () {
  const conn = net.createConnection({
    host: '135.23.222.148',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write('Name: SKC');
    for (let i = 0; i < 20; i++) {
      setTimeout(() => {
        conn.write('Move: up');
      }, 100 * i);
    }
  });
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  return conn;
};

module.exports = { connect };
