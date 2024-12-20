const dotenv = require("dotenv")
dotenv.config()

const express = require("express");
const app = express();
const morgan = require("morgan");
const cookieParser = require("cookie-parser")
const connect = require("./db/db")
connect()

app.use(morgan("dev"));

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())


app.use("/", captainRoutes)


module.exports = app