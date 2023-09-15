const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "192.168.210.255",
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // Handle events and interactions with the server here
  conn.on("connect", () => {
    console.log("Connected to the server!");
    // You can start sending/receiving data here
  });

  return conn;
};

console.log("Connecting ...");
const client = connect(); // Store the connection in a variable
