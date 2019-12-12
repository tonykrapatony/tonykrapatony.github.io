var cart = {};

$(function(){
    checkCart();
    showMiniCart();
})

$(function(){
    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        
        responsive: [
            {
                breakpoint: 600,
                settigs: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    autoplay: true,
                    arrows: false,
                }
            }
        ]
    })
})

$(function(){
    var date = new Date();
    year = date.getFullYear();
    $('.year').html(year);
})

$(function(){
    $('.burger').on("click", function(){
        var display = $('.menu').css('display');
        if (display == 'none') {
            $('.menu').css('display', 'flex');
        } else {
            $('.menu').css('display', 'none');
        }
    })
})

function checkCart(){
    if (localStorage.getItem('cart') != null){
        cart = JSON.parse(localStorage.getItem('cart')); //отримення даних(getItem) з localStorage, перетворення їх назад в масив JSON.parse і внесення в масив cart
    }

}

function showMiniCart(){

            var out = null;
            for (var key in cart){
                out += cart[key];
            }
            $('.number').html(out);   
}