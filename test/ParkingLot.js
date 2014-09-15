var should = require("should");
var Car = require("../src/Car.js");
var ParkingLot = require("../src/ParkingLot.js");
var Ticket = require("../src/Ticket.js");

describe("ParkingLotTest",function(){

  it("parkinglot should park",function() {
    
    var parkingLotTest = new ParkingLot(1);
    
	var myCar = Object.create(Car);
	var ticket = parkingLotTest.park(myCar);
	ticket.should.be.ok;
  });

  it("parkinglot should not park",function() {
    
    var parkingLotTest = new ParkingLot(0);
    
	var myCar = Object.create(Car);
	
	(function(){ parkingLotTest.park(myCar); }).should.throw();
  });

  it("parkinglot should fetch car with valid ticket",function() {
    
    var parkingLotTest = new ParkingLot(1);
    
	var myCar = Object.create(Car);

	var ticket = parkingLotTest.park(myCar);

	parkingLotTest.fetch(ticket).should.be.exactly(myCar);
	
  });
})

