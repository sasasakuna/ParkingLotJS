var should = require("should");
var Car = require("../src/Car");

describe("carTest",function(){
  it("a car should not null",function() {
    var car = Object.create(Car);
    // should.exist(car);
    car.should.not.be.null;
  });
})