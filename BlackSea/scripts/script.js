$(function(){
    $('.slider_list').slick({
        arrows: false,
        dots: true,
        initialSlide: 2,
        fade: true,
    });
})

$(function(){
    //підсвітка обраного пункту меню
    $(".nav_item").on('click', function() {
        $('.nav_item').removeClass('active'); 
        $(this).addClass('active');
    });
})

function showMenu() {
    var 
    menu = document.getElementById('nav_list');
    menuStyle = getComputedStyle(menu);
    
    if (menuStyle.display == 'none'){
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    } 
}


