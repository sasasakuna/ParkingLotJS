var SmartParkingBoy = require("../src/SmartParkingBoy.js");
var ParkingLot  = require("../src/ParkingLot.js");
var Should = require("should");
var Car = require("../src/Car.js");
var Ticket = require("../src/Ticket.js");
describe("SmartParkingBoy",function(){

	it("should smartParkingBoy choose the parkinglot with max availableLot",function(){
        var parkingLotArrayTest = new Array();
		var parkingLot1 = new ParkingLot(0);
		parkingLotArrayTest.push(parkingLot1);
		var parkingLot2 = new ParkingLot(1);
		parkingLotArrayTest.push(parkingLot2);
	    var smartParkingBoy = new SmartParkingBoy(parkingLotArrayTest);
	    smartParkingBoy.chooseParkingLot().should.be.equal(parkingLot2);
	});

	it("should smartParkingBoy park car",function(){
        var parkingLotArrayTest = new Array();
		parkingLotArrayTest.push(new ParkingLot(0));
		parkingLotArrayTest.push(new ParkingLot(1));
	    var smartParkingBoy = new SmartParkingBoy(parkingLotArrayTest);
	    var ticket = smartParkingBoy.park(new Car());
	    ticket.should.be.ok;
	});
	it("should smartParkingBoy get car with valid ticket",function(){
        var parkingLotArrayTest = new Array();
		parkingLotArrayTest.push(new ParkingLot(0));
		parkingLotArrayTest.push(new ParkingLot(1));
	    var smartParkingBoy = new SmartParkingBoy(parkingLotArrayTest);
	    var car = new Car();
	    var ticket = smartParkingBoy.park(car);
	    smartParkingBoy.fetch(ticket).should.be.equal(car);
	});
	it("should smartParkingBoy not get car with invalid ticket",function(){
        var parkingLotArrayTest = new Array();
		parkingLotArrayTest.push(new ParkingLot(0));
		parkingLotArrayTest.push(new ParkingLot(1));
	    var smartParkingBoy = new SmartParkingBoy(parkingLotArrayTest);
	    var car = new Car();
	    (function(){ smartParkingBoy.fetch(new Ticket()); }).should.throw();
	});
	
})