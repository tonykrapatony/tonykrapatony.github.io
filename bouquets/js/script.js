function showMenu() {
    var menu = document.getElementById('nav_menu');
    var menuStyle = getComputedStyle(menu);
    if (menuStyle.display == 'none') {
        menu.style.display = 'list-item';
    } else {
        menu.style.display = 'none';
    }
}

//слайдер
$(function(){
    var year =  new Date().getFullYear();
    $('.policy').html('All rights reserved &copy;' + ' ' + year);
    
    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
    });
})