function Father(country){this.country = country}
Father.prototype.wow  = function () {
	console.log("wow");
}

function Child () {}
Child.prototype = new Father("china");

var child = new Child();