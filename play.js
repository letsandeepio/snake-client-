const { connect } = require('./client');
const { setupInput } = require('./input');

console.log('Connecting ...');
let conn = connect();

/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */

setupInput(conn);
