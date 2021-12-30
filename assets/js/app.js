function hoverOnLeft() {
	document.getElementById('menu_left').classList.add('active');
	document.getElementById('left_btn').classList.add('active');
}

function hoverOffLeft() {
	document.getElementById('menu_left').classList.remove('active');
	document.getElementById('left_btn').classList.remove('active');
}

function hoverOnRight() {
	document.getElementById('menu_right').classList.add('active');
	document.getElementById('right_btn').classList.add('active');
}

function hoverOffRight() {
	document.getElementById('menu_right').classList.remove('active');
	document.getElementById('right_btn').classList.remove('active');
}
var burger = document.getElementById('burger');
var navmob = document.getElementById('navmob');
var navmob_cross = document.getElementById('navmob_cross');

var elm = document.getElementById("burger");
if (elm) elm.onclick = function (event) {
	navmob.classList.add('active')
	burger.classList.add('active')

	if (event.target !== event.currentTarget) {
		return;
	}
	event.stopPropagation()
};

var elm = document.getElementById("navmob_cross");
if (elm) elm.onclick = function (event) {
	navmob.classList.remove('active')
	burger.classList.remove('active')

	if (event.target !== event.currentTarget) {
		return;
	}
	event.stopPropagation()
};
$(document).ready(function () {
	$('.intro__slider').slick({
		infinite: true,
		speed: 800,
		centerMode: true,
		variableWidth: true,
	});
});
$(document).ready(function () {
	$('.collection__slider').slick({
		infinite: true,
		centerMode: true,
		variableWidth: true,
	});
});
var catalogFilterBlock = document.getElementById('catalogFilterBlock');
var catalogFilter = document.getElementById('catalogFilter');

var elm = document.getElementById("catalogFilterBlock");
if (elm) elm.onclick = function (event) {
	catalogFilter.classList.toggle('active')

	if (event.target !== event.currentTarget) {
		return;
	}
	event.stopPropagation()
};