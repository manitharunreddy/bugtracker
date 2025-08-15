// Get the client
import mysql from "mysql2/promise";

// Create the connection to database
const sqlInstance = await mysql.createConnection({
  host: "192.168.1.200",
  user: "root",
  database: "bugTracker",
  port: 3307,
  password: "root",
});
export default sqlInstance;
