window.onload = function(){
	var wall =document.querySelectorAll('.boundary');
	var win = true;

	  for (var i = 0; i < wall.length; i++){
	    wall[i].addEventListener("mouseover", function() {
	    	this.style.background = "red";
	    	 win = false;
	    	 return win;
	    });
	   } 

	    end.addEventListener("mouseover", function() {
         if (win == true) {
          document.getElementById("status").innerHTML = "YOU WIN!";
           alert("CONGRATULATIONS! YOU WIN!");
          }
          win = false;
          });
}