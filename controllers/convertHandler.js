function ConvertHandler() {
  this.getNum = function (input = "1") {
    if (input == "1") {
      return 1;
    }
    let result = input.slice(0, input.search(/[a-z]/i));
    if (/\/\d*\//g.test(result)) {
      return "invalid number";
    }

    return Number(eval(result));
  };

  this.getUnit = function (input) {
    let result = input.slice(input.search(/[a-z]/i));
    switch (result.toLowerCase()) {
      case "gal":
        return "gal";
      case "l":
        return "L";
      case "lbs":
        return "lbs";
      case "kg":
        return "kg";
      case "mi":
        return "mi";
      case "km":
        return "km";
      default:
        return "invalid unit";
    }
  };

  this.getReturnUnit = function (initUnit) {
    if (typeof initUnit != "string") {
      return "invalid unit";
    }
    switch (initUnit.toLowerCase()) {
      case "gal":
        return "L";
      case "l":
        return "gal";
      case "lbs":
        return "kg";
      case "kg":
        return "lbs";
      case "mi":
        return "km";
      case "km":
        return "mi";
      default:
        return "invalid unit";
    }
  };

  this.spellOutUnit = function (unit) {
    if (typeof unit != "string") {
      return "invalid unit";
    }
    switch (unit.toLowerCase()) {
      case "gal":
        return "gallons";
      case "l":
        return "liters";
      case "lbs":
        return "pounds";
      case "kg":
        return "kilograms";
      case "mi":
        return "miles";
      case "km":
        return "kilometers";
      default:
        return "invalid unit";
    }
  };

  this.convert = function (initNum, initUnit) {
    if (typeof initNum != "number") {
      return "invalid number";
    }
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    switch (initUnit.toLowerCase()) {
      case "gal":
        return initNum * galToL;
      case "l":
        return initNum / galToL;
      case "lbs":
        return initNum * lbsToKg;
      case "kg":
        return initNum / lbsToKg;
      case "mi":
        return initNum * miToKm;
      case "km":
        return initNum / miToKm;
      default:
        return "invalid unit";
    }
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    if (returnNum == "invalid number" && returnUnit == "invalid unit") {
      return "invalid number and unit";
    } else if (returnNum == "invalid number") {
      return "invalid number";
    } else if (returnUnit == "invalid unit") {
      return "invalid unit";
    } else {
      let returnUnitString = spellOutUnit(returnUnit);
      let initUnitString = spellOutUnit(initUnit);
      return `${initNum} ${initUnitString} converts to ${returnNum} ${returnUnitString}`;
    }
  };
}

module.exports = ConvertHandler;
