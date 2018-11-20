function showMenu() {
    var menu = document.getElementById('menu');
    var menuStyle = getComputedStyle(menu);
    if (menuStyle.display == 'none') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
}

$(function(){
    $('.slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        responsive: [{
            breakpoint: 1259,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                arrows: true
            }
            }, {

            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }]
    });  
});

$(function(){
    $("a.image").fancybox({
        "showNavArrows": true,
        "cyclic": true,
    });
});