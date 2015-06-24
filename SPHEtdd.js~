// The TestMyCode implementation will be in here
var assert = {
	i:0,
	pass:0,

	equals:function (message, results, newmsg) {

		var Sphe = document.createElement("div");
		Sphe.id = "Sphe" + this.i;
		Sphe.style.height = "300px";
		Sphe.style.width = "300px";
		Sphe.style.border = "5px solid black";
		Sphe.style.display = "inline-block";

		document.body.appendChild(Sphe);

        var rg = new RedOrGreen(Sphe.id);

        if (message === results) {
	    Sphe.innerHTML = newmsg;
	    rg.makeGreen();
	    this.pass ++;
     }
        else {
	    Sphe.innerHTML = newmsg;
	    rg.makeRed();
     }

        this.i ++;
     }
  }

     var TestMyCode = {
	    run: function(name, assertTest) {
	    this.name = name;
	    assertTest(assert);
     }
 }

function results () {
	var pree = document.createElement("p");
	document.body.appendChild(pree);
	pree.innerHTML = "Number of passed tests is " + assert.pass + " out of " + assert.i;
}

    Status API Training Shop Blog About Help 

