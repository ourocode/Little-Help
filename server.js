const express = require("express");
const app = express();

app.get("/", function (req, res) {
    res.send("Welcome to Little Help!");
});

app.listen(3000, function () {
    console.log("Server running at http://localhost:3000");
});