let connection;
let currentDirection = null; // Variable to store the current direction

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

const handleUserInput = (key) => {
  if (key === '\u0003') {
    console.log("Exiting game...");
    process.exit();
  }

  // Update the direction based on the keys pressed
  if (key === 'w') {
    currentDirection = 'up';
  }
  if (key === 'a') {
    currentDirection = 'left';
  }
  if (key === 's') {
    currentDirection = 'down';
  }
  if (key === 'd') {
    currentDirection = 'right';
  }

  // Send direction when arrow keys are pressed
  if (currentDirection !== null) {
    connection.write(`Move: ${currentDirection}`);
  }

  // Send messages when 'e' or 'q' is pressed
  if (key === 'e') {
    connection.write('Say: "Sssnake"');
  }
  if (key === 'q') {
    connection.write('Say: "TOO SLOW!"');
  }
  if (key === 'b') {
    connection.write('Say: "BOO YAAA!"');
  }
};

module.exports = setupInput;

