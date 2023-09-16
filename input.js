const setupInput = function (conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  // Handle user input
  stdin.on("data", (key) => {
    handleUserInput(key, conn);
  });

  return stdin;
};

// Define handleUserInput to handle user input
const handleUserInput = (key, conn) => {
  // Your code here to handle user input
  // For example, you can send commands to the server based on key presses
  // In this example, we're just checking for Ctrl+C to exit
  if (key === '\u0003') {
    console.log("Exiting game...");
    process.exit();
  }
};

module.exports = setupInput;
