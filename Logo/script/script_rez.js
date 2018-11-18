var width = 281;// ширина изображения
var carouselWidth = 1124; // ширина карусели

var carousel = document.getElementById('carousel');
var list = carousel.querySelector('ul');


var positionNext = 0; // текущий сдвиг влево
var positionPrev = -1405;

document.getElementById('prev').onclick = function() {

    positionPrev = positionPrev + width;


    if (positionPrev > 0) {
        positionPrev = - carouselWidth;
    }

    list.style.marginLeft = positionPrev + 'px';  
}

document.getElementById('next').onclick = function() {
        
    positionNext = positionNext - width;

    if (positionNext < - carouselWidth) {
        positionNext = 0;
    }

    list.style.marginLeft = positionNext + 'px';  
}

// FANCYBOX
    
//$(function() {
//$("li>a").fancybox({
//	'transitionIn'	:	'elastic',
//	'transitionOut'	:	'elastic',
//	'speedIn'		:	600, 
//	'speedOut'		:	200, 
//	'overlayShow'	:	false,
//    'hideOnContentClick': true,
//    overlayShow : true,
//});
//});

