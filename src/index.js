const express = require("express");
const path = require("path");
const hbs = require("hbs");
// import { getCity } from "../public/js/main";
const app = express();
const port = process.env.PORT || 8000;

// app.get(route,callback)
// console.log("getCity", getCity);
//Use Tamplate Engine
app.set("view engine", "hbs");
// const StaticPath = path.join(__dirname, "../public");
const tamplateViewsPath = path.join(__dirname, "../tamplates/views");
const partialsPath = path.join(__dirname, "../tamplates/partials");
app.set("views", tamplateViewsPath);
hbs.registerPartials(partialsPath);
// app.use(express.static(StaticPath));
app.get("/", function callback(req, res) {
  res.render("index", {
    name: "Muhammad Abdullah",
  });
});
app.get("/about", function callback(req, res) {
  res.render("about");
});
app.get("/blog", function callback(req, res) {
  res.render("blog");
});
app.get("/weather", function callback(req, res) {
  res.render("weather");
});
app.get("*", function callback(req, res) {
  res.render("404");
});

app.listen(port, () => {
  console.log(`welcome to Sixth ExpressWeb Js app on the port ${port}`);
});
