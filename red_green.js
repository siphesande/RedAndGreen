function RedOrGreen(Id) {
this.makeGreen = function() {
	document.getElementById(Id).style.backgroundColor = "Green";

}


this.makeRed = function() {
	document.getElementById(Id).style.backgroundColor = "Red";
}
};