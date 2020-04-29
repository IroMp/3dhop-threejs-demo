function setInfo(hotspot){

  var modal = document.getElementById("myModal");
  var span = document.getElementsByClassName("close")[0];


	switch (hotspot){
		case 1:
    modal.style.display = "block";
    span.onclick = function() {
          modal.style.display = "none";
    }
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
		break;
    case 2:
    modal.style.display = "block";
    span.onclick = function() {
          modal.style.display = "none";
    }
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
    break;
    case 3:
    modal.style.display = "block";
    span.onclick = function() {
          modal.style.display = "none";
    }
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
		break;

	  default:
		modal.style.display = "none";
			break;
	}

}
