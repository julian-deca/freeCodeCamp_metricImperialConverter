const chai = require("chai");
let assert = chai.assert;
const ConvertHandler = require("../controllers/convertHandler.js");

let convertHandler = new ConvertHandler();

suite("Unit Tests", function () {
  suite("Number Tests", function () {
    test("#is number", () => {
      assert.typeOf(convertHandler.getNum("10milllll"), "number");
    });
    test("#is number decimal", () => {
      assert.typeOf(convertHandler.getNum("10.1mi"), "number");
    });
    test("#is a number fraction", () => {
      assert.typeOf(convertHandler.getNum("10/2mi"), "number");
    });
    test("#decimal fraction", () => {
      assert.typeOf(convertHandler.getNum("10.1/2mi"), "number");
    });
    test("#not double fraction", () => {
      assert.equal(convertHandler.getNum("10/2/3mi"), "invalid number");
    });
    test("#default 1", () => {
      assert.equal(convertHandler.getNum(), 1);
    });
  });
  suite("Units Tests", function () {
    test("#return gal", () => {
      assert.equal(convertHandler.getUnit("10gal"), "gal");
    });
    test("#return L", () => {
      assert.equal(convertHandler.getUnit("10l"), "L");
    });
    test("#return mi", () => {
      assert.equal(convertHandler.getUnit("10mi"), "mi");
    });
    test("#return km", () => {
      assert.equal(convertHandler.getUnit("10km"), "km");
    });
    test("#return lbs", () => {
      assert.equal(convertHandler.getUnit("10lbs"), "lbs");
    });
    test("#return kg", () => {
      assert.equal(convertHandler.getUnit("10kg"), "kg");
    });
    test("#return 'invalid unit'", () => {
      assert.equal(convertHandler.getUnit("10kgg"), "invalid unit");
    });
  });
  suite("Return Units Tests", function () {
    test("#return galToL", () => {
      assert.equal(convertHandler.getReturnUnit("gal"), "L");
    });
    test("#return LToGal", () => {
      assert.equal(convertHandler.getReturnUnit("l"), "gal");
    });
    test("#return miToKm", () => {
      assert.equal(convertHandler.getReturnUnit("mi"), "km");
    });
    test("#return kmToMi", () => {
      assert.equal(convertHandler.getReturnUnit("km"), "mi");
    });
    test("#return lbsToKg", () => {
      assert.equal(convertHandler.getReturnUnit("lbs"), "kg");
    });
    test("#return kgToLbs", () => {
      assert.equal(convertHandler.getReturnUnit("kg"), "lbs");
    });
    test("#return 'invalid unit'", () => {
      assert.equal(convertHandler.getReturnUnit("kgg"), "invalid unit");
    });
  });
  suite("Spell Tests", function () {
    test("#spell gal", () => {
      assert.equal(convertHandler.spellOutUnit("gal"), "gallons");
    });
    test("#spell l", () => {
      assert.equal(convertHandler.spellOutUnit("l"), "liters");
    });
    test("#spell mi", () => {
      assert.equal(convertHandler.spellOutUnit("mi"), "miles");
    });
    test("#spell km", () => {
      assert.equal(convertHandler.spellOutUnit("km"), "kilometers");
    });
    test("#spell lbs", () => {
      assert.equal(convertHandler.spellOutUnit("lbs"), "pounds");
    });
    test("#spell kg", () => {
      assert.equal(convertHandler.spellOutUnit("kg"), "kilograms");
    });
    test("#spell gal", () => {
      assert.equal(convertHandler.spellOutUnit("gal"), "gallons");
    });
  });
  suite("Conversion Tests", function () {
    test("#Convert galToL", () => {
      assert.equal(convertHandler.convert(1, "gal"), 1 * 3.78541);
    });
    test("#Convert lToGal", () => {
      assert.equal(convertHandler.convert(1, "l"), 1 / 3.78541);
    });
    test("#Convert miToKm", () => {
      assert.equal(convertHandler.convert(1, "mi"), 1 * 1.60934);
    });
    test("#Convert kmToMi", () => {
      assert.equal(convertHandler.convert(1, "km"), 1 / 1.60934);
    });
    test("#Convert lbsToKg", () => {
      assert.equal(convertHandler.convert(1, "lbs"), 1 * 0.453592);
    });
    test("#Convert kgToLbs", () => {
      assert.equal(convertHandler.convert(1, "kg"), 1 / 0.453592);
    });
  });
});

/*
test("#", () => {
    assert.();
  });
  test("#", () => {
    assert.();
  });
  test("#", () => {
    assert.();
  });
  test("#", () => {
    assert.();
  });
  test("#", () => {
    assert.();
  });
  test("#", () => {
    assert.();
  });
  
  */
