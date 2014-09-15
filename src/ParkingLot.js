
var Ticket = require("../src/Ticket.js");

function ParkingLot(availableLot){
   this.availableLot  = availableLot;
   this.map  = new Array();
}
ParkingLot.prototype = {
   setAvailableLot: function(availableLot){
        this.availableLot = availableLot;
    },
    park: function(car){
        if(this.availableLot < 1){
			throw new Error('fail');
		}
		var ticket = new Ticket();
		this.map[ticket] = car;
		this.availableLot -= 1;
		return ticket;
    },
    fetch: function(ticket) {
        if(this.map[ticket]){
            this.availableLot += 1;
            return this.map[ticket];
        }
        else {
            throw new Error("InvalidTicketException");
        }
    }
};
module.exports = ParkingLot;