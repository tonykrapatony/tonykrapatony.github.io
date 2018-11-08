// показати/сховати меню
function showMenu() {
    var menu = document.getElementById('nav-list');
    var menuStyle = getComputedStyle(menu);
    if (menuStyle.display == 'none') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
}

$(function(){
    //підсвітка обраного пункту меню
    $(".nav-list-item").on('click', function() {
        $('.nav-list-item').removeClass('active'); 
        $(this).addClass('active');
    });
})

$(function(){
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 401,
                settings: {
                    arrows: false
                }
            }
        ]
    });  
});







