const chaiHttp = require("chai-http");
const chai = require("chai");
let assert = chai.assert;
const server = require("../server");
const { text } = require("body-parser");

chai.use(chaiHttp);

suite("Functional Tests", function () {
  test("#convert 1", () => {
    chai
      .request(server)
      .get("api/convert")
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.equal(res - text, "aaaaa");
      });
  });
});
