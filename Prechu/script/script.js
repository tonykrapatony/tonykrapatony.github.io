function showMenu() {
    var
    menu = document.getElementById("nav_menu");
    menuStyle = getComputedStyle(menu);
    if (menuStyle.display == "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}
$(function(){
    $(".nav_item").on('click', function(){
        $(".nav_item").removeClass("active");
        $(this).addClass("active");
    });
})

$(function(){
    $(".slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    });
})