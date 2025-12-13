require("dotenv").config();
const express = require("express");
const axios = require("axios");
const app = express();

app.set("view engine", "pug");
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", async (req, res) => {
 
});

app.get("/update-cobj", (req, res) => {
 
});

app.post("/update-cobj", async (req, res) => {


});

// * Localhost
app.listen(3000, () => console.log("Listening on http://localhost:3000"));
