let connection;
let currentDirection = null; // Variable to store the current direction

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  // Start the game loop to continuously move the snake
  startGameLoop();

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
  if (key === 'w' && currentDirection !== 'down') {
    currentDirection = 'up';
  }
  if (key === 'a' && currentDirection !== 'right') {
    currentDirection = 'left';
  }
  if (key === 's' && currentDirection !== 'up') {
    currentDirection = 'down';
  }
  if (key === 'd' && currentDirection !== 'left') {
    currentDirection = 'right';
  }

  // Send messages when 'e' or 'q' is pressed
  if (key === 'e') {
    connection.write('Say: "Sssnake"');
  }
  if (key === 'q') {
    connection.write('Say: "TOO SLOW!"');
  }
};

// Game loop function to continuously move the snake
const startGameLoop = () => {
  setInterval(() => {
    if (currentDirection) {
      connection.write(`Move: ${currentDirection}`);
    }
  }, 60); // Adjust the interval to control the snake's speed
};

module.exports = setupInput;