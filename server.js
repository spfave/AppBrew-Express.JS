const { request } = require("http");

const express = require("express");
const app = express();

app.get("/", function (req, res) { //request & response
    res.send("<h1>Hello World!</h1>");
});

app.get("/about", function (req, res) {
    res.send("Hi, I'm Sebastian. I'm learning web development.");
});

app.get("/hobbies", function (req, res) {
    res.send(
        "<ul><li>Coding</li><li>Hiking</li></ul>"
    );
});

app.get("/contact", function (req, res) {
    res.send("Contact me at sebastian@email.com");
});

app.listen(3000, function () {
    console.log("Server started on port 3000");
});
