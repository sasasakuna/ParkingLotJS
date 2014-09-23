var ParkingBoy = require("../src/ParkingBoy.js");
function SmartParkingBoy(parkingLotArray){
   this.parkingLotArray = parkingLotArray;
}
SmartParkingBoy.prototype = new ParkingBoy(this.parkingLotArray);
SmartParkingBoy.prototype.constructor = SmartParkingBoy;

SmartParkingBoy.prototype.chooseParkingLot = function(){
	var temp = Array.prototype.slice.call(this.parkingLotArray);
	

	temp.sort(function(value1,value2){
        return value2.availableLot - value1.availableLot;
	});

	
    
    
    return temp[0];
};

module.exports = SmartParkingBoy;