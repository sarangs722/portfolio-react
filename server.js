require("dotenv").config()

const express = require("express");
const cors = require("cors"); //middleware
const path = require("path");

const contactRoute = require('./route/contactRoute')
console.log(process.env.NODE_ENV)
const app = express();

//creating the middleware
app.use(express.json())
app.use(cors())

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"))
    app.get("*", (req, res) => (
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
    ));
}

const port = process.env.PORT || 5000;
app.listen(port, console.log(`service listening to port 5000`));


