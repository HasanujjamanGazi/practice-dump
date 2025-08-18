import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
var headingData = { heading: "Enter Your Name Below 👇" };
var nameLength = 0;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", headingData);
});

app.post("/submit", (req, res) => {
  let fullName = req.body["fName"] + req.body["lName"];
  nameLength = fullName.length;
  if (nameLength !== 0) {
    headingData["heading"] = `There is ${nameLength} letters in your name.`;
  }
  res.render("index.ejs", headingData);
});

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});
