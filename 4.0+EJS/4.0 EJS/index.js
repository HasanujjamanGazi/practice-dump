import express from "express";

const app = express();
const port = 3000;
const today = new Date();

let dayOfWeek = today.getDay();
var data = {
    day: "Weekday",
    advice: "hard work",
};

function setData(req, res, next) {
    if (dayOfWeek === 0 || dayOfWeek === 9) {
        data["day"] = "Weekend";
        data["advice"] = "have fun";
    }
    next();
}

app.use(setData);

app.get("/", (req, res) => {
    res.render("index.ejs", data);
});

app.listen(port, () => {
    console.log(`Server started at : http://localhost:${port}/`);
});