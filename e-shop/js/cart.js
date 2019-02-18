var cart = {}; // моя корзина

$.getJSON('goods.json', function(data){
    var goods = data;
    checkcart();
    showcart(); // виві товарів на сторінку
    // console.log(cart);
    function showcart(){
        var out = '';
        for (var key in cart){
            out += '<div id="cart_item">';
            out += '<button class="delete" data-atr="'+key+'">x</button>';
            out += '<img src="'+goods[key].image+'" width="50">';
            out += goods[key].name;
            out += '<button class="minus" data-atr="'+key+'">-</button>';
            out += cart[key];
            out += '<button class="plus" data-atr="'+key+'">+</button>';         
            out += cart[key]*goods[key].cost;
            out += '</div>'
            out += '<br>';
        }
        $('#my-cart').html(out);
        $('.plus').on('click', plusgoods); // додавання товарів в корзині
        $('.minus').on('click', minusgoods); // віднімання товарів в корзині
        $('.delete').on('click', deletegoods); // видалення товарів з корзини
    }
    function plusgoods(){
        // додавання товарів в корзині
        var atrticul = $(this).attr('data-atr');
        cart[atrticul]++;
        savecarttoLS();
        showcart();
    }
    function minusgoods(){
        // віднімання товарів в корзині
        var atrticul = $(this).attr('data-atr');
        if (cart[atrticul] > 1){
           cart[atrticul]--; 
        } else {
            delete cart[atrticul];   
        }
        savecarttoLS();
        showcart();
    }
    function deletegoods(){
        // видалення товарів з корзини
        var atrticul = $(this).attr('data-atr');
        delete cart[atrticul];
        savecarttoLS();
        showcart();
    }
})
function checkcart(){
    // перевірка наявності корзини в localStorage
    if (localStorage.getItem('cart') != null) {
        cart = JSON.parse(localStorage.getItem('cart'));  //отримення даних(getItem) з localStorage, перетворення їх назад в масив JSON.parse і внесення в масив cart
    }
    // console.log(cart);
}
function savecarttoLS(){
    localStorage.setItem( 'cart', JSON.stringify(cart) );
}