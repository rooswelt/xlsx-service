const express = require("express");
const bodyParser = require("body-parser");

const generatorController = require("./controller/generator");

const port = process.env.PORT || 3000;

var app = express();
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.get("/", function(req, res) {
  res.status(200).send("Excel service");
  res.end("Nothing to look here, except that express works!");
});

app.get("/generateExcel", function(req, res) {
  req.body = req.body || {};
  var name = req.params.fileName || "excel.xlsx";
  var sheetName = req.params.sheetName || "Prosit-Italia";
  const data = [
    [1, 2, 3],
    [true, false, null, "sheetjs"],
    ["foo", "bar", new Date("2014-02-19T14:30Z"), "0.3"],
    ["baz", null, "qux"]
  ];
  const buffer = generatorController.generateExcel(sheetName, data);
  res.attachment(name);
  res.end(buffer, "binary");
});

app.listen(port);
console.log(`Excel service listening at port ${port}`);
