
function Car(){};
function Ticket(){};

function NotAvailableException(){};
function InvalidTicketException(){};

// function parkingLot(availableLot){

// 	this.availableLot = availableLot;
// 	this.setAvailableLot = function(availableLot){
//         this.availableLot = availableLot;
// 	};

// 	this.map = new Array();

// 	this.park = function(car){
// 		console.log(this.availableLot);
// 		if(this.availableLot < 1){
// 			throw new NotAvailableException();
// 		}
// 		var ticket = new Ticket();
// 		this.map[ticket] = car;
// 		this.availableLot -= 1;
// 		return ticket;
         
// 	};
// 	this.getCar = function(ticket){
// 		if(!this.map[ticket]){
// 		    this.availableLot += 1;
// 		    return this.map[ticket];
// 		}
// 		else {
// 		    throw new InvalidTicketException();
// 		}

// 	};
//  }
function ParkingLot(availableLot){
   this.availableLot  = availableLot;
   this.map  = new Array();
}
ParkingLot.prototype = {
   setAvailableLot : function(availableLot){
        this.availableLot = availableLot;
    },
    park : function(car){
        if(this.availableLot < 1){
			throw new NotAvailableException();
		}
		var ticket = new Ticket();
		this.map[ticket] = car;
		this.availableLot -= 1;
		return ticket;
    },
    getCar: function(ticket) {
        if(this.map[ticket]){
            this.availableLot += 1;
            return this.map[ticket];
        }
        else {
            throw new InvalidTicketException();
        }
    }
};

// function parkTest(){
// 	var parkingLotTest = new ParkingLot(3);
// 	console.log("Parking a car");
// 	try{
// 		var ticket = parkingLotTest.park(new Car());
// 		console.log("SUCCESS");
// 	}
// 	catch(err){
// 		console.log(err);
// 		return;
// 	}	
// }
// parkTest();

// function getCarTest(){
// 	var parkingLotTest = new ParkingLot(3);
// 	try{
// 		var myCar = new Car();
// 		var ticket = parkingLotTest.park(myCar);
// 		if(parkingLotTest.getCar(ticket)==myCar){
// 			console.log("getCar SUCCESS");
// 		}
// 		else {
// 			console.log("getCar WRONG");
// 		}
// 	}
// 	catch(err){
// 		console.log(err);
// 		return;
// 	}
// }
// getCarTest();

function ParkingBoy(parkingLotArray){
	this.parkingLotArray = parkingLotArray;
	this.chooseParkingLot = function(){
		for(var i=0; i < this.parkingLotArray.length; i++){
			if(this.parkingLotArray[i].availableLot > 0)

				return this.parkingLotArray[i];
		}
		return null; //all parkinglot are full.
	};
	this.park = function(car){
		var availableParkingLot = this.chooseParkingLot();
		
		if(availableParkingLot){
			return availableParkingLot.park(car);
		}
		else {
			throw new NotAvailableException();
		}
	};
	this.getCar = function(ticket){
		for(var i=0; i<this.parkingLotArray.length; i++){
			try{
				return this.parkingLotArray[i].getCar(ticket);
			}
			catch(err){ // not in this parkingLot.

			}
		}
		throw new InvalidTicketException();
	};
 

}

function parkingBoyTest(){
	var parkingLotArrayTest = new Array();
	parkingLotArrayTest.push(new ParkingLot(1));
	parkingLotArrayTest.push(new ParkingLot(1));
    var parkingBoy = new ParkingBoy(parkingLotArrayTest);
    try {
    	var car = new Car();
    	var ticket = parkingBoy.park(car);
		var another = parkingBoy.getCar(ticket);
		if(car === another){
			console.log("SUCCESS");
		}
		else {
			console.log("Failure");
		}
    }
    catch(err){
    	console.log("err");
    }

}
parkingBoyTest();