const setupInput = function () {
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
  //we're just checking for Ctrl+C to exit
  if (key === '\u0003') {
    console.log("Exiting game...");
    process.exit();
  }
};

module.exports = setupInput;

