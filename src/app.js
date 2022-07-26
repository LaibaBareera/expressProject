const express = require("express");
const path = require("path");
const app = express();
const hbs= require("hbs");
const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../templates/views");
const PartialPath = path.join(__dirname, "../templates/partials");
const port = process.env.PORT || 5000;
app.set('view engine','hbs');
app.set('views',templatePath);
hbs.registerPartials(PartialPath)
app.use(express.static(staticPath));
app.get("", (req, res) => {
 res.render("index");
});
app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/weather", (req, res) => {
  res.render("weather");
});
app.get("/*", (req, res) => {
  res.render("404",{
    errorMsg : "Oops page not found",
  });
});

app.listen(port, () => {
  console.log(`Your server is at localhost: ${port}`);
});
