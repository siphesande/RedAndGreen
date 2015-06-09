var count=0;
        var colors =["#008A00", "#FF0000", "#008A00", "#FF0000"];
        function changeColor() {
            if(count>=colors.length-1){
                count=0;
            }
            else{
                count++;
            }
            var col=document.getElementById("box1");
            col.style.backgroundColor = colors[count];

            var value=document.getElementById("colorChange").firstChild;
            value.data=value.data=="Make Green"?"Make Red":"Make Green";
        }
