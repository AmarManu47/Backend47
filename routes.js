const express = require("express");
const db = require("./db");

const router = express.Router();

// Get all users
router.get("/users", (req, res) => {
  db.query("SELECT * FROM users", (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Get a single user
router.get("/users/:id", (req, res) => {
  db.query(
    "SELECT * FROM users WHERE id = ?",
    [req.params.id],
    (err, result) => {
      if (err) throw err;
      res.json(result[0]);
    }
  );
});

// Add a new user
router.post("/users", (req, res) => {
  const { name, email } = req.body;
  db.query(
    "INSERT INTO users (name, email) VALUES (?, ?)",
    [name, email],
    (err, result) => {
      if (err) throw err;
      res.json({ id: result.insertId, name, email });
    }
  );
});

// Update a user
router.put("/users/:id", (req, res) => {
  const { name, email } = req.body;
  db.query(
    "UPDATE users SET name = ?, email = ? WHERE id = ?",
    [name, email, req.params.id],
    (err, result) => {
      if (err) throw err;
      res.json({ message: "User updated successfully" });
    }
  );
});

// Delete a user
router.delete("/users/:id", (req, res) => {
  db.query("DELETE FROM users WHERE id = ?", [req.params.id], (err, result) => {
    if (err) throw err;
    res.json({ message: "User deleted successfully" });
  });
});

module.exports = router;
