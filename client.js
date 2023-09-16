const net = require("net");

// establishes a connection with the game server
const connect = () => {
  const conn = net.createConnection({
    host: "192.168.210.255",
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // Handle events and interactions with the server here
  conn.on("connect", () => {
    console.log("Successfully connected to game server!");
    // You can start sending/receiving data here
  });

  conn.on("connect", () => {
    conn.write("Name: TJS");
  });

  // Handle incoming data from the server
  conn.on("data", (data) => {
    console.log("Received data from the server:", data);
    // You can process or display the incoming data here
  });

  return conn;
};

module.exports = { connect };

