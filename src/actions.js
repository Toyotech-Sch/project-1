/*
	 
	/ \     | Do not edit this file.
   / ! \	| 
  /_____\	| Author: Joel Tanko (https://github.com/jtogofe)

*/

let animateAbles = document.querySelectorAll('.animatable');
let navbar = document.querySelector('.navbar');
let menu = document.querySelector('.menu');


menu.addEventListener('click', function(event) {
	// Toggle the menu on mobile devices
	navbar.classList.toggle('nav-open')
})

window.onscroll = function(event) {
	let scrollPosition = window.pageYOffset;
	
	if (scrollPosition > 430){
		navbar.classList.add('scroll')
	}else{
		navbar.classList.remove('scroll')		
	}

	for (let elem of animateAbles){
		if (!elem.classList.contains('animate') &&
			(elem.offsetHeight - scrollPosition) <= 120
		)
		{
			elem.classList.add('animate')
		}
	}
}
