const xlsx = require("node-xlsx");

exports.generateExcel = generateExcel;

function generateExcel(name, data) {
  return xlsx.build([{ name: name, data: data }]); // Returns a buffer
}
