const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
var cors = require("cors");

// IMPORT MODELS
require("./models/sampleModel");

require("dotenv").config();

const uri = process.env.DB_URL;
console.log(uri);
const app = express();
app.use(bodyParser.json());
app.use(cors());

//IMPORT ROUTES
require("./routes/sampleRoute")(app);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("build"));

  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "build", "index.html"));
  });
}
mongoose.connect(uri);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
