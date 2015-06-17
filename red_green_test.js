var rg = new RedOrGreen("myblock");

  rg.makeGreen();
    /*myElements background color should be set to red green now*/
      if(document.getElementById('myblock').style.backgroundColor ==='green'){
             window.alert('success');
             }
             else{
             window.alert('failure');
             }
  rg.makeRed();
   /*myElements background should be set to red now*/
      if(document.getElementById('myblock').style.backgroundColor ==='red'){
		window.alert('failure');
	}
	else{
		window.alert('success');
    
	}
