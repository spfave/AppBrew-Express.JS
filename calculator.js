const express = require("express");
const bodyparser = require("body-parser");

const app = express();
app.use(bodyparser.urlencoded({ extended: true }));


// 
app.get("/", function (req, res) {
    res.sendFile(`${__dirname}/index.html`);
});

app.post("/", function (req, res) {
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);
    let result = num1 + num2;

    res.send(`The calculation result is ${result}`);
});

app.listen(3000, function () {
    console.log("Server started on port 3000");
})