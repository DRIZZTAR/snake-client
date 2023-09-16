const { connect } = require('./client');
const setupInput = require('./input');

console.log("Connecting ...");
const conn = connect();

// Pass the connection object to setupInput
setupInput(conn);

// Handle Ctrl+C to exit the game
const handleUserInput = (key) => {
  if (key === '\u0003') {
    console.log("Exiting game...");
    process.exit();
  }
};
