const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public"));

app.get("/about", function (req, res) {
    res.send("Little Help tracks subscription spending.");
});

app.listen(3000, function () {
    console.log("Server running at http://localhost:3000");
});