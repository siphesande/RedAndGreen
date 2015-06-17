function RedOrGreen(id) {
this.makeGreen = function() {
	document.getElementById(id).style.backgroundColor = "Green";

}


this.makeRed = function() {
	document.getElementById(id).style.backgroundColor = "Red";
}
};