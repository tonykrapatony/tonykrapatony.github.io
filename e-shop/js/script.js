cart = {};

$(function(){
    loadgoods();
    checkcart();   
    showcart();
});

function loadgoods(){
    // завантаження товарів
    $.getJSON('goods.json', function(data){
        // console.log(data);
        var out = '';
        for ( var key in data){
            out +='<div class="goods_item">'
            out +='<img class="item_img" src="' + data[key].image + '">';
            out +='<div class="item_name">' + data[key]['name'] + '</div>';
            out +='<div class="item_descr">' + data[key]['descripton'] + '</div>';
            out +='<div class="item_cost">Ціна:' + data[key]['cost'] + ' грн.</div>';
            out +='<button class="item_button" data-art="'+key+'" class="item_button">Купити</button>';
            out +='</div>'
            
            $('#goods').html(out);
            $('button.item_button').on('click', addtocart);
        }
    })
}

function addtocart(){
    // додавання товарів в корзину
    var arcticul = $(this).attr('data-art');
    if (cart[arcticul] != undefined){
        cart[arcticul]++;    
    } else {
        cart[arcticul] = 1;   
    }
    // console.log(cart);
    localStorage.setItem( 'cart', JSON.stringify(cart) ); //внесення(setItem) в localStorage і перетворення масиву в строку (JSON.stringify)
    showcart();
}
function checkcart(){
    // перевірка наявності корзини в localStorage
    if (localStorage.getItem('cart') != null) {
        cart = JSON.parse(localStorage.getItem('cart'));  //отримення даних(getItem) з localStorage, перетворення їх назад в масив JSON.parse і внесення в масив cart
    }
    // console.log(cart);
}
function showcart(){
    $.getJSON('goods.json', function(data){
    var goods = data;
    show();
    
    function show(){
        var out = '';
        for (var key in cart){
            out += goods[key].name + '-';
            out += ' ' + cart[key];
            out += '<br>';
        }
        $('#my-cart').html(out);
    }
})
    // відображення корзини(артікул і кількість)
//    var out = '';
//    for (var key in cart) {
//        out += key + '-' + cart[key] + '<br>';
//    }
//    $('#my-cart').html(out);
}