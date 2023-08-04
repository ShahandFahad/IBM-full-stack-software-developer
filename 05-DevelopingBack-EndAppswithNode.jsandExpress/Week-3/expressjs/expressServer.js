const express = require("express");
const app = new express();

let loginDetails = [];

app.get("/", (req, res) => {
  res.send("Welcome to the express server");
});

app.get("/loginDetails", (req, res) => {
  res.send(JSON.stringify(loginDetails));
});

app.post("/login/:name", (req, res) => {
  loginDetails.push({ name: req.params.name, login_time: new Date() });
  res.send(req.params.name + ", You are logged in!");
});

app.get("/:name", (req, res) => {
  res.send("Hello " + req.params.name);
});

//
const montList = [
  "January",
  "Feburary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Augest",
  "September",
  "October",
  "November",
  "December",
];

app.get("/fetchMonth/:num", (req, res) => {
  //   const monthID = req.params.num * 1;
  const monthID = parseInt(req.params.num);

  //   const month = montList.indexOf(num);
  //   let num = parseInt(req.params.num);
  if (monthID < 1 || monthID > 12) {
    res.send("Invalid Month ID " + req.params.name);
  }
  res.send("Month: " + montList[monthID - 1]);
});

app.listen(3333, () => {
  console.log(`Listening at http://localhost:3333`);
});
