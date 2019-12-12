var cart = {}; // масив корзина

$(function(){
    loadGoods();
    checkCart();
    showMiniCart();
})

function loadGoods(){
    // завантаження товарів
    $.getJSON('goods.json', function(data){
//        console.log(data);
        var out = '';
        for (var key in data) {
//            console.log(data[key]['name']+':'+data[key]['cost']);
            out += '<div class="goods_item">'
            out += '<h3>'+data[key]['name']+'</h3>';
            out += '<p>'+data[key]['description']+'</p>';
            out += '<img src="'+data[key].image+'">';
            out += '<p>Ціна: '+data[key]['cost']+'</p>';
            out += '<button class="add-to-cart" data-art="'+key+'">До кошику</button>';
            out += '</div>'
        }
    
        $('.goods').html(out);
        $('button.add-to-cart').on('click', addToCart);
    });
}

function addToCart(){
    //додаємо товар до корзини
    var articul = $(this).attr('data-art');
    if (cart[articul]!=undefined) {
        cart[articul]++;
    }
    else {
        cart[articul] = 1;
    }
//    console.log(cart);
    localStorage.setItem('cart', JSON.stringify(cart)); //внесення(setItem) в localStorage і перетворення масиву в строку (JSON.stringify)
    showMiniCart();
}

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