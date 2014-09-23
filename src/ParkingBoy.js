
function ParkingBoy(parkingLotArray){
	this.parkingLotArray = parkingLotArray;
	
}
ParkingBoy.prototype.getParkingLotArray = function(){
		return this.parkingLotArray;
};
ParkingBoy.prototype.chooseParkingLot = function(){
	for(var i=0; i < this.parkingLotArray.length; i++){
		if(this.parkingLotArray[i].availableLot > 0)

			return this.parkingLotArray[i];
	}
	return null; //all parkinglot are full.
};
ParkingBoy.prototype.park = function(car){
	var availableParkingLot = this.chooseParkingLot();
	
	if(availableParkingLot){
		return availableParkingLot.park(car);
	}
	else {
		throw new Error("NotAvailableException");
	}
};
ParkingBoy.prototype.fetch = function(ticket){
	for(var i=0; i<this.parkingLotArray.length; i++){
		try{
			return this.parkingLotArray[i].fetch(ticket);
		}
		catch(err){ // not in this parkingLot.

		}
	}
	throw new Error("InvalidTicketException");
};
module.exports = ParkingBoy;