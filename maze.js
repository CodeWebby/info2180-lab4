
window.onload = function(){
	var wall =document.querySelectorAll('.boundary');
	var start = document.getElementById('start')
	var win = true;

	  for (var i = 0; i < wall.length; i++){
	    wall[i].addEventListener("mouseover", function() {
	    	this.style.background = "red";
	    	 win = false;
	    	 document.getElementById("status").innerHTML = "YOU LOSE!"
	    	 return win;
	    });
	   } 

	    end.addEventListener("mouseover", function() {
         if (win == true) {
          document.getElementById("status").innerHTML = "YOU WIN!";
           
          }
          win = false;
          });

	    /*start.addEventListener("click", function(){
	    	 for (var i = 0; i < wall.length; i++) {
               wall[i].style.background="#eeeee";
              }
	    	
	    });*/ 
	  

	  

}