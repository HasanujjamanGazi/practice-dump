import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));
var result = "";

app.use(bodyParser.urlencoded({ extended: true }));

function bandNameGenerator(req, res, next) {
    console.log(req.body);
    result = req.body["subject"] + req.body["message"];
    next();
}

app.use(bandNameGenerator);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
    res.send(`<h1>Your OutPut : </h1><h2>${result}</h2>`)
});

app.listen(port, () => {
    console.log(`The server is Running on ${port} .. .. .. `);
});