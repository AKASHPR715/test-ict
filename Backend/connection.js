const mongoose = require("mongoose");

mongoose.connect("connection string")
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log("Error connecting to DB:", error);
  });
