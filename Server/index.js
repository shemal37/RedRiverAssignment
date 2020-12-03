const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
// const db = require('../db');

const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../public")));

app.get("/update", (req, res) => {});

app.get("/getAllStudents", (req, res) => {
  res.send([
    { firstName: "Jane", lastName: "Doe", age: 25 },
    { firstName: "John", lastName: "Doe", age: 40 },
    { firstName: "Michael", lastName: "Scott", age: 54 },
    { firstName: "Bat", lastName: "Man", age: 30 },
    { firstName: "Spider", lastName: "Man", age: 20 },
    { firstName: "Iron", lastName: "Man", age: 40 },
    {
      firstName: "Scott",
      lastName: "Friedman",
      age: 80,
    },
    {
      firstName: "Bella",
      lastName: "Schoringagne",
      age: 10,
    },
  ]);
  res.sendStatus(200);
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Web server running on: http://localhost:${PORT}`);
});
