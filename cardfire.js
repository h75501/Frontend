window.onload=function(){

	var card = document.querySelector(".carfs");
	var trigger= document.querySelector(".trigger");
	var closeButton = document.querySelector("#nav");

	function toggleModal(){
		card.classList.toggle("show-modal");
	}

	function windowOnClick(event){
		if(event.target === card){
			toggleModal();
		}
	}
	trigger.addEventListener("click", toggleModal);
    closeButton.addEventListener("click", toggleModal);
    window.addEventListener("click", windowOnClick);
}


//Show Cart

