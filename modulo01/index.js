const express = require("express");

const server = express();

server.use(express.json());

const users = ["Leo", "Tales", "Sofia"];

server.use((req, res, next) => {
  console.time("Requesr");
  console.log(`Método: ${req.method}; URL: ${req.url}`);
  next();
  console.timeEnd("Requesr");
});

function checkUsersExists(req, res, next) {
  if (!req.body.name) {
    return res.status(400).json({ error: "User name is required" });
  }

  return next();
}

function checkIndexExists(req, res, next) {
  const user = users[req.params.index];
  if (!user) {
    return res.status(400).json({ error: "User does not exists" });
  }

  req.user = user;

  return next();
}

server.get("/users", checkIndexExists, (req, res) => {
  return res.json(users);
});

server.get("/users/:index", checkIndexExists, (req, res) => {
  const { index } = req.params;

  return res.json(req.user);
});

server.post("/users", checkUsersExists, (req, res) => {
  const { name } = req.body;

  users.push(name);

  return res.json(users);
});

server.put("/users/:index", checkIndexExists, checkUsersExists, (req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  users[index] = name;

  return res.json(users);
});

server.delete("/users/:index", checkIndexExists, (req, res) => {
  const { index } = req.params;

  users.splice(index, 1);

  return res.send();
});

server.listen(3000);
