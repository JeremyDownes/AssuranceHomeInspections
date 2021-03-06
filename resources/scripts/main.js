$(document).ready(function() {
	let fontSize = window.innerHeight <= window.innerWidth ? window.innerHeight/100 : window.innerWidth/100
	$('html').css({fontSize: fontSize})
	$('header').css({fontSize: fontSize*3.5})
	$('header span').css({fontSize: fontSize*2})

	$('li button:focus+ul, ul li button:hover+ul').css({position: 'absolute',	top: '-8vh'})
	
	$(window).scroll( function () {
		if ($(this).scrollTop() > fontSize * 50) {
			$('ul li button:focus+ul, ul li button:hover+ul').css({position: 'absolute',	top: '4vh'})
		} else {
			$('li button:focus+ul, ul li button:hover+ul').css({position: 'absolute',	top: '-8vh'})
		}
	})
})
