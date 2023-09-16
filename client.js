const net = require("net");
const { IP, PORT } = require("./constants");

// Function to create a connection object
const createConnection = () => {
  // Create a new connection object with the specified host (IP) and port
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // Set the encoding to interpret incoming data as text (UTF-8)
  conn.setEncoding("utf8");

  return conn;
};

// Function to handle the "connect" event
const handleConnect = (conn) => {
  console.log("Successfully connected to game server!");
  
  // Send the player's name to the server after successfully connecting
  conn.write("Name: TJS");
};

// Function to handle incoming data from the server
const handleData = (data) => {
  console.log("Received data from the server:", data);
};

// Function to establish a connection with the game server
const connect = () => {
  // Create a connection object using the createConnection function
  const conn = createConnection();

  // Set up event listeners for the connection's "connect" and "data" events
  conn.on("connect", () => handleConnect(conn)); // Call handleConnect with the connection object
  conn.on("data", handleData); // Call handleData when data is received

  return conn; // Return the connection object
};

module.exports = { connect };