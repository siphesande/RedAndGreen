// The TestMyCode implementation will be in here
var assert = {
	i:0,
	pass:0,

	equals:function (message, results, newmsg) {

		var block = document.createElement("div");
		block.id = "block" + this.i;
		block.style.height = "300px";
		block.style.width = "300px";
		block.style.border = "5px solid black";
		block.style.display = "inline-block";

		document.body.appendChild(block);

        var rg = new RedOrGreen(block.id);

        if (message === results) {
	    block.innerHTML = newmsg;
	    rg.makeGreen();
	    this.pass ++;
     }
        else {
	    block.innerHTML = newmsg;
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
	var me = document.createElement("p");
	document.body.appendChild(me);
	me.innerHTML = "Number of passed tests is " + assert.pass + " out of " + assert.i;
}

    
