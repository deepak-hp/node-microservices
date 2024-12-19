const dotenv = require("dotenv");
dotenv.config()
const express= require("express")
const morgan = require("morgan")
const cookieParser = require("cookie-parser")
const userRoutes = require("./routes/user.routes")
const connect = require("./db/db")

connect();

const app = express();

app.use(morgan("dev"))

// to get json data
app.use(express.json())
// to get the req.body content
app.use(express.urlencoded({extended: true}))

// to read cookies 
app.use(cookieParser())


app.use("/", userRoutes)

module.exports= app