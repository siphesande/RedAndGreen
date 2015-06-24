// The TestMyCode implementation will be in here
// do assert
var assert = {

	passed:false,

    equals:function (message, results, newmsg) {

         if(message === results){
            this.passed = true;
         }
         else {

    	this.passed = false;
      }
  
   }

};

var TestMyCode = {

	runCount : 0,
	testPassedCount : 0,

	createBlock : function(){

		var block = document.createElement("div");
	    block.id = "block" + this.runCount;
	    //styling my block
	    block.style.height = "300px";
	    block.style.width  = "300px";
	    block.style.border = "5px solid black";
        //block.style.display = "inline-block";
	    document.body.appendChild(block);

	    return block;
	},

	run: function(name,assertTest) {
    	this.runCount = this.runCount + 1;
    
		var block = this.createBlock(this.runCount);
		
     	this.name = name;
     	assertTest(assert);
	  	
	  	var rg = new RedOrGreen(block.id);
        if (assert.passed){
            block.innerHTML = name;
            rg.makeGreen(); 
            this.testPassedCount = this.testPassedCount + 1;
	        
	    } else{
	         rg.makeRed();
	         block.innerHTML = name;
	    }

     	document.getElementById("testResults").innerHTML = "Number of test passed : " + this.testPassedCount + " out of " + this.runCount;
     	document.body.appendChild(testResults);
	}
	    
}
