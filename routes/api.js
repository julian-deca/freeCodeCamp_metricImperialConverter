"use strict";

const expect = require("chai").expect;
const ConvertHandler = require("../controllers/convertHandler.js");

module.exports = function (app) {
  let convertHandler = new ConvertHandler();
  app.get("/api/convert?:input", (req, res) => {
    const input = req.query.input;
    const initNum = convertHandler.getNum(input);
    const initUnit = convertHandler.getUnit(input);

    const returnNum = convertHandler.convert(initNum, initUnit);
    const returnUnit = convertHandler.getReturnUnit(initUnit);
    const string = convertHandler.getString(
      initNum,
      initUnit,
      returnNum,
      returnUnit
    );
    if (returnNum == "invalid number" && returnUnit == "invalid unit") {
      res.send("invalid number and unit");
    } else if (returnNum == "invalid number") {
      res.send("invalid number");
    } else if (returnUnit == "invalid unit") {
      res.send("invalid unit");
    } else {
      res.json({
        initNum: parseFloat(initNum.toFixed(5)),
        initUnit: initUnit,
        returnNum: parseFloat(returnNum.toFixed(5)),
        returnUnit: returnUnit,
        string: string,
      });
    }
  });
};
