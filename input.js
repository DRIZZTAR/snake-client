let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  // Handle user input
  stdin.on("data", (key) => {
    handleUserInput(key);
  });

  return stdin;
};

// Define handleUserInput to handle key presses
const handleUserInput = (key) => {
  // Code here handles user input
  if (key === '\u0003') {
    console.log("Exiting game...");
    process.exit();
  }
  if (key === 'w') {
    connection.write('Move: up'); // Send the "Move: up" command to the server
  }
  if (key === 'a') {
    connection.write('Move: left'); // Send the "Move: left" command to the server
  }
  if (key === 's') {
    connection.write('Move: down'); // Send the "Move: down" command to the server
  }
  if (key === 'd') {
    connection.write('Move: right'); // Send the "Move: right" command to the server
  }
  if (key === 'e') {
    connection.write('Say: "Sssnake"');
  }
  if (key === 'q') {
    connection.write('Say: "TOO SLOW!"');
  }
};

module.exports = setupInput;


