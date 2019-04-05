// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const reservationArray = [
    {
        id: 1,
        name: "Example",
        email: "e@mai.l",
        phone: "555-867-5309"
    }
];
const waitlistArray= [
    {
        id: 2,
        name: "Example2",
        email: "e2@mai.l",
        phone: "222-867-5309"
    }
];

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

// ===========================route handling================


  app.get("/viewReservation", function(req, res) {
    res.sendFile(path.join(__dirname, "viewReservation.html"));
  });

  app.get("/newReservation", function(req, res) {
    res.sendFile(path.join(__dirname, "newReservation.html"));
  });

app.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });
  
//   // Displays all characters
//   app.get("/api/characters", function(req, res) {
//     return res.json(characters);
//   });