window.onload = function(){
	var wall =document.querySelectorAll('.boundary');
	  for (var i = 0; i < wall.length; i++){
	    wall[i].addEventListener("mouseover", function() {
	    	this.style.background = "red";
	    });
	   } 
}