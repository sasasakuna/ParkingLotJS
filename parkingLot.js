
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