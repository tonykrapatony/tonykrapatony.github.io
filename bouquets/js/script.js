//show/hide menu
function showMenu() {
    var menu = document.getElementById('nav_menu');
    var menuStyle = getComputedStyle(menu);
    if (menuStyle.display == 'none') {
        menu.style.display = 'list-item';
    } else {
        menu.style.display = 'none';
    }
}

//slider
$(function(){
    var year =  new Date().getFullYear();
    $('.policy').html('All rights reserved &copy;' + ' ' + year);
      
    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        
        responsive: [{
            
            breakpoint: 1024,
            settings:{
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 3000
            }
        }, {
            breakpoint: 768,
            settings:{
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 3000
            }
        }]
    });
})

