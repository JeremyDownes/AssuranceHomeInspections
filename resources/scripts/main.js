$(document).ready(function() {
	let fontSize = window.innerHeight <= window.innerWidth ? window.innerHeight/100 : window.innerWidth/100
	$('html').css({fontSize: fontSize})
	$('header').css({fontSize: fontSize*3.5})
	$('header span').css({fontSize: fontSize*2})
})
