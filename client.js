const net = require("net");
const { IP, PORT } = require("./constants");

// Function to create a connection object
const createConnection = () => {
  const name = "TJS"; // pick your name
  const conn = net.createConnection({ host: IP, port: PORT });
  conn.setEncoding("utf8");

  // Event handler for successful connection
  conn.on("connect", () => {
    console.log("Connected to the game server!");
    conn.write(`Name: ${name}`);
  });

  // Event handler for incoming data from the server
  conn.on("data", (data) => {
    console.log("Received data from the server:", data);
    // Handle incoming data here
  });

  return conn;
};

// Function to establish a connection with the game server
const connect = (name) => {
  return createConnection(name);
};

module.exports = { connect };


