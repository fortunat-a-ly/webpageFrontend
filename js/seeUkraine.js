
var header = document.getElementsByTagName('header')[0];
var navMenu = document.getElementById('navMenu');
var mainElement = document.getElementsByTagName('main')[0];
var menuButton = document.querySelector("[aria-label='Menu']");
var menuIcon = menuButton.firstChild;
var footer = document.getElementsByTagName('footer')[0];
var menuOpened = false;




function toDefaultMenu(){
	closeAllDropdowns();
	closeMenu();
	arrowIconsToDefault();
	changeColorToBlack();
}

function operateNavMenu(){
	console.log('operateNavMenu');
	if(navMenu.style.left=="-10rem" || navMenu.style.left==""){
		
		openMenu();
		menuOpened = true;
	}
	else{
		closeMenu();
		menuOpened = false;

	}

	console.log(menuOpened);
}

function openMenu(){
	console.log('openMenu');
	showMenu();
	menuIconToCross();
	blurPage();
}

function closeMenu(){
	console.log('closeMenu');
	hideMenu();
	menuIconToThreeBars();
	unblurPage();
}

function showMenu(){
	console.log('showMenu');
	navMenu.style.left = "0";
}

function hideMenu(){
	console.log('hideMenu');
	navMenu.style.left = "-10rem";
}

function blurPage(){
	console.log('blurPage');
	mainElement.classList.add('blurry');
	footer.classList.add('blurry');
}

function unblurPage(){
	console.log('unblurPage');
	mainElement.classList.remove('blurry');
	footer.classList.remove('blurry');
}

function clickLink(){
	closeMenu();
}

function menuIconToThreeBars(){
	menuIcon.className ='fas fa-bars';
	menuButton.style.backgroundColor='transparent';
}

function menuIconToCross(){
	menuIcon.className ='fas fa-times';
	menuButton.style.backgroundColor='#ece6e6';
}

var width = document.documentElement.clientWidth;
scroll();

function onResize(){
	console.log(document.documentElement.clientWidth);
	
	if(menuOpened){
		if(width < 769 && document.documentElement.clientWidth >= 769){
			closeMenu();
			closeAllDropdowns();
			arrowIconsToDefault();
		}
	}

	scroll();

	width = document.documentElement.clientWidth;
	scroll();
}


function operateDropdownMenu(arrowIcon){

	var dropdownMenu = arrowIcon.nextSibling;
	console.log(dropdownMenu.style.display);

		if (dropdownMenu.style.display == 'none' || dropdownMenu.style.display == ''){
			openDropdownMenu(dropdownMenu);
			arrowIconToUp(arrowIcon);
		}
		else{
			closeDropdownMenu(dropdownMenu);
			arrowIconToDown(arrowIcon);
		}

}


function closeAllDropdowns(){
	var dropdowns = document.getElementsByClassName('dropdown-menu');

	for (var i = dropdowns.length - 1; i >= 0; i--) {
		dropdowns[i].style.display = 'none';
	}
}
function openDropdownMenu(dropdownMenu){
	dropdownMenu.style.display="block";
}

function closeDropdownMenu(dropdownMenu){
	dropdownMenu.style.display = 'none';
}

function arrowIconToUp(arrowIcon){
	arrowIcon.className = 'fas fa-angle-up';
}

function arrowIconToDown(arrowIcon){
	arrowIcon.className = 'fas fa-angle-down';
}


var arrowIcons = document.querySelectorAll("i[class*='fa-angle-down']");
function arrowIconsToDefault(){
	

	for (var i = arrowIcons.length - 1; i >= 0; i--) {
		arrowIcons[i].className = 'fas fa-angle-down';
	}
}



function scroll(){
	var attractionsY = (document.getElementById('attractions').getBoundingClientRect());
	var mapY = (document.getElementById('map').getBoundingClientRect());
	var viewsY = (document.getElementById('views').getBoundingClientRect());
	var pollY = (document.getElementById('poll').getBoundingClientRect());

	/*Mark the link of the section we are on*/
	if(width > 768){
		if(attractionsY.bottom >=80 && attractionsY.top <= 503){
		document.querySelectorAll("a[href='#attractions']")[0].classList.add('current');
		}
		else{
			document.querySelectorAll("a[href='#attractions']")[0].classList.remove('current');
		}

		if(mapY.bottom >=80 && mapY.top <= 503){
			document.querySelectorAll("a[href='#map']")[0].classList.add('current');
		}
		else{
			document.querySelectorAll("a[href='#map']")[0].classList.remove('current');
		}

		if(viewsY.bottom >=80 && viewsY.top <= 503){
			document.querySelectorAll("a[href='#views']")[0].classList.add('current');
		}
		else{
			document.querySelectorAll("a[href='#views']")[0].classList.remove('current');
		}

		if(pollY.bottom >=80 && pollY.top <= 503){
			document.querySelectorAll("a[href='#poll']")[0].classList.add('current');
		}
		else{
			document.querySelectorAll("a[href='#poll']")[0].classList.remove('current');
		}
	}
	else{
		changeColorToBlack();
	}
}

var links = document.querySelectorAll("a[href^='#']");
function changeColorToBlack(){
	for (var i = links.length - 1; i >= 0; i--) {
		links[i].classList.remove('current');
	}
}


window.addEventListener('scroll', scroll);
window.addEventListener('resize', onResize);
