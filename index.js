const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const dotenv = require("dotenv");
const mongoose = require('mongoose')
const connectDb = require("./config/dbconn")


//dotenv.config();
dotenv.config({ path: "./config/config.env" });
connectDb()


//middleware
app.use(bodyParser.json());

const authRoute = require("./routes/auth.js");
app.use("/api/user/", authRoute);

app.listen(8080, () => console.log("Server is Up and Running"));