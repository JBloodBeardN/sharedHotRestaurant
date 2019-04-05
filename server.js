// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

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
   app.get("/api/tables", function(req, res) {
     return (res.json(reservationArray),res.json(waitlistArray));
   });
   app.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });
  
app.post("/api/newReservation", function(req, res){
    //inspect length of reservationArray
    if(reservationArray.length>4){
        waitlistArray.push(req.body);
    } else {
        reservationArray.push(req.body);
    }
    res.json(req.body);
})
