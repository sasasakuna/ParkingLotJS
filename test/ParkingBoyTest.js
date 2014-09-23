var Car = require("../src/Car.js");
var ParkingLot = require("../src/ParkingLot.js");
var ParkingBoy = require("../src/ParkingBoy.js");
var should = require("should");
describe("ParkingLotTest",function(){


  it("parkingBoy should park",function() {
    
    var parkingLotArrayTest = new Array();
	parkingLotArrayTest.push(new ParkingLot(1));
	parkingLotArrayTest.push(new ParkingLot(1));
    var parkingBoy = new ParkingBoy(parkingLotArrayTest);    
	var car = new Car();

	var ticket = parkingBoy.park(car);
	
	ticket.should.be.ok;
    
  });

  it("parkingBoy should not park",function() {
    
    var parkingLotArrayTest = new Array();
	parkingLotArrayTest.push(new ParkingLot(0));
    var parkingBoy = new ParkingBoy(parkingLotArrayTest);  
	var car = new Car();
	
	(function(){ parkingBoy.park(car); }).should.throw();
  });

 it("parkingBoy should park in first parkingLot if it is available",function() {
    
    var parkingLotArrayTest = new Array();
	parkingLotArrayTest.push(new ParkingLot(1));
	parkingLotArrayTest.push(new ParkingLot(1));
    var parkingBoy = new ParkingBoy(parkingLotArrayTest);
	var car = new Car();
	parkingBoy.park(car);
	var obj = parkingBoy.parkingLotArray[0];
	obj.availableLot.should.be.equal(0);
	
  });
  it("parkingBoy should get car with valid ticket",function() {
    
    var parkingLotArrayTest = new Array();
	parkingLotArrayTest.push(new ParkingLot(1));
	parkingLotArrayTest.push(new ParkingLot(1));
    var parkingBoy = new ParkingBoy(parkingLotArrayTest);
	var car = new Car();
	var ticket = parkingBoy.park(car);
	parkingBoy.fetch(ticket).should.be.exactly(car);
	
  });
})