var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var tables = [
  {
    customerNamer: "The Dude",
    phoneNumber: "doesn't have one",
    customerEmail: "whatever they use at the bowling alley",
    customerID: "El-dudarino",
  },
];

var waitList = [
  {
    customerNamer: "The Dude",
    phoneNumber: "doesn't have one",
    customerEmail: "whatever they use at the bowling alley",
    customerID: "El-dudarino",
  },
];

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

// Displays all reservations
app.get("/api/tables", function(req, res) {
  return res.json(tables);
});

app.get("/api/waitList", function(req, res) {
  return res.json(waitList);
});

app.get("/api/clear", function(req, res) {
  tables = [];
  waitList = [];
  // return res.json(clear);
});


app.post("/api/tables", function(req, res) {

  var newReservation = req.body;
  console.log(newReservation);
    if (tables.length <= 4) {
        tables.push(newReservation);
    } else {
        waitList.push(newReservation);
    }

  res.json(newReservation);
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
