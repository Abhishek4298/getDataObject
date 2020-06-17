const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const app = express();

const router = require("./routes/index");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.use("/", router);

app.listen(3000);
{
  console.log("server is running");
}
