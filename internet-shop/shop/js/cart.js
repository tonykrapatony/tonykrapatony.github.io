var cart = {};

$(function(){
    order();
})

$.getJSON('goods.json', function(data){
    var goods = data;
//    console.log(goods);
    checkCart();
    showMiniCart();
    showCart();
    
    function showMiniCart(){

            var out = null;
            for (var key in cart){
                out += cart[key];
            }
            $('.number').html(out);   
    }
    
    function showCart(){
        if ( $.isEmptyObject(cart)) {
            var out = '<div class="empty_cart">Кошик порожній</div>';
            $('.my_cart').html(out);
        } else {
            var out = '';
            var sum = 0;
            for (var key in cart){
                out += '<div class="cart_item">';
                out += '<img src="'+goods[key].image+'" class="item_img">';
                out += '<div class="item_descr">'+goods[key].name+'</div>';
                out += '<button class="minus" data-atr="'+key+'"></button>';
                out += '<div class="item_number">Кількість: '+cart[key]+'</div>'
                out += '<button class="plus" data-atr="'+key+'"></button>';
                out += '<div class="item_price" data-price="'+goods[key].cost*cart[key]+'">Ціна за '+cart[key]+' шт.'+goods[key].cost*cart[key]+' грн.</div>';
                out += '<button class="delete" data-atr="'+key+'"><img src="img/close.png" alt="close"></button>';
                sum += goods[key].cost*cart[key];
                out += '</div>';
            }
            out += '<div class="sum">Загальна вартість: '+sum+' грн.</div>';
            out += '<div class="cart_order">Оформити замовлення</div>';
            $('.my_cart').html(out);
            $('.delete').on('click', deleteGoods);
            $('.minus').on('click', minusGoods);
            $('.plus').on('click', plusGoods);  
        }
    }
    
    function deleteGoods(){
        var articul = $(this).attr('data-atr');
        delete cart[articul];
        savecarttoLS();
        showCart();
    }
    function minusGoods(){
        var articul = $(this).attr('data-atr');
        if (cart[articul] > 1){
            cart[articul]--;
        } else{
            delete cart[articul];
        }
        savecarttoLS();
        showCart();
    }
    function plusGoods(){
        var articul = $(this).attr('data-atr');
        cart[articul]++;
        savecarttoLS();
        showCart();
    }
})


function checkCart(){
    if (localStorage.getItem('cart') != null){
        cart = JSON.parse(localStorage.getItem('cart')); //отримення даних(getItem) з localStorage, перетворення їх назад в масив JSON.parse і внесення в масив cart
    }

}

function savecarttoLS(){
    localStorage.setItem( 'cart', JSON.stringify(cart) );
}

function order(){
    $('.cart_order').on('click', function(){
        alert('order');
    })
}