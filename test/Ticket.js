var should = require("should");
var Ticket = require("../src/Ticket");

describe("ticketTest",function(){
  it("a ticket should not null",function() {
    var ticket = Object.create(Ticket);
    // should.exist(car);
    ticket.should.not.be.null;
  });
})