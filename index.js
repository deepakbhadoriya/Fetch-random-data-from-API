const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
var router = express.Router();
var bodyParser = require("body-parser");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: "false" }));
app.use(bodyParser.json());

app.use(cors());
app.use(express.json());

//mongo DB Configuration
const db = require("./setup/database").mongoURL;

//DB connection
mongoose
  .connect(db,{
    //to remove warnings
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => console.log("database connected"))
  .catch(err => console.log(err));

//using routes
const saveWebData = require("./routes/savedata");

app.use("/savedata", saveWebData);

app.listen(port, () => {
  console.log(`Server is running at port : ${port}`);
});
