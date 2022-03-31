const express = require("express");

const dataController = require("./controllers/data.controller")

const app = express()



app.use(express.json())

app.use("/data", dataController)

module.exports = app

