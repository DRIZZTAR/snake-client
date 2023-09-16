const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = () => {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // Handle events and interactions with the server here
  conn.on("connect", () => {
    console.log("Successfully connected to game server!");
    //start sending/receiving data here
    conn.write("Name: TJS"); // Send the player's name

    /* Use setInterval to send "Move: up" every 50ms
    setInterval(() => {
      conn.write("Move: up");
    }, 50);*/
  });

  // Handle incoming data from the server
  conn.on("data", (data) => {
    console.log("Received data from the server:", data);
    // You can process or display the incoming data here
  });

  return conn;
};

module.exports = { connect };