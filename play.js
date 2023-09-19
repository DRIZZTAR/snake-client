//play.js
const { connect } = require("./client");
const setupInput = require("./input");

console.log("Connecting ...");
const conn = connect(); // Store the connection in a variable

setupInput(conn); // Pass the connection object to setupInput