const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost", // Change if using a remote database
  user: "root", // Your MySQL username
  password: "M@nu6268", // Your MySQL password
  database: "crud_db", // The database you created
});

db.connect((err) => {
  if (err) {
    console.error("Database Connection Failed: " + err.stack);
    return;
  }
  console.log("Connected to MySQL Database!");
});

module.exports = db;
