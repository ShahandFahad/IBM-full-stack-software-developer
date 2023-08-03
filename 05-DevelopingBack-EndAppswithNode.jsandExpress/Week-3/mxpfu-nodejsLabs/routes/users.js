const express = require("express");
const router = express.Router();

let users = [
  {
    firstName: "John",
    lastName: "wick",
    email: "johnwick@gamil.com",
    DOB: "22-01-1990",
  },
  {
    firstName: "John",
    lastName: "smith",
    email: "johnsmith@gamil.com",
    DOB: "21-07-1983",
  },
  {
    firstName: "Joyal",
    lastName: "white",
    email: "joyalwhite@gamil.com",
    DOB: "21-03-1989",
  },
];

// GET request: Retrieve all users
router.get("/", (req, res) => {
  // Copy the code here
  res
    .status(200)
    .json({ status: "success", results: users.length, data: users });
});

// GET by specific ID request: Retrieve a single user with email ID
router.get("/:email", (req, res) => {
  // Copy the code here
  // console.log(req.body);
  // console.log(req.params.email);
  const email = req.params.email;

  // const person = users.find((person) => person.email === email);
  const person = users.filter((user) => user.email === email);
  if (!person) {
    res.status(404).json({ status: "FAILED", message: "not found" });
  }
  res.status(200).json({ status: "success", data: person });
});

// POST request: Create a new user
router.post("/", (req, res) => {
  // Copy the code here
  // console.log(req.body);
  // users.push({
  //   firstName: req.query.firstName,
  //   lastName: req.query.lastName,
  //   email: req.query.email,
  //   DOB: req.query.DOB,
  // });
  const person = req.body;
  users.push(person);
  res.status(201).json({ status: "created", data: person });
});

// PUT request: Update the details of a user by email ID
router.put("/:email", (req, res) => {
  // Copy the code here
  // console.log(req.body);
  // console.log(req.params.email);

  const email = req.params.email;
  const person = users.filter((user) => user.email === email);

  if (!person) {
    res.status(404).json({ status: "FAILED", message: "not found" });
  }

  // console.log(person);
  // return an array with single element
  // copy the request body to the object at index 0
  const updatedUser = { ...person[0], ...req.body };
  res.status(200).json({ status: "success", data: updatedUser });
});

// DELETE request: Delete a user by email ID
router.delete("/:email", (req, res) => {
  const email = req.params.email;
  users = users.filter((user) => user.email != email);
  res.send(`User with the email  ${email} deleted.`);
});

router.get("/:lastname", (req, res) => {
  // Copy the code here
  // console.log(req.body);
  // console.log(req.params.email);
  const lastName = req.params.lastname;

  // const person = users.find((person) => person.email === email);
  const person = users.filter((user) => user.lastName === lastName);
  if (!person) {
    res.status(404).json({ status: "FAILED", message: "not found" });
  }
  res.status(200).json({ status: "success", data: person });
});

function getDateFromString(strDate) {
  let [dd, mm, yyyy] = strDate.split("-");
  return new Date(yyyy + "/" + mm + "/" + dd);
}

// console.log(sorted_users);
router.get("/sort", (req, res) => {
  let sorted_users = users.sort(function (a, b) {
    let d1 = getDateFromString(a.DOB);
    let d2 = getDateFromString(b.DOB);
    return d1 - d2;
  });
  res.send(sorted_users);
});

module.exports = router;
