$(function(){ 
    quoteGen();
    
    $('.header').on('click', function(){
        quoteGen();
    });
})

function quoteGen(){
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max))+110;
    }
    var num = getRandomInt(31);
    console.log(num);
    
    $.getJSON('quotes.json', function(data){
        console.log(data[num]);
        var quote = '';
        quote += '"'+data[num]+'"';
        $('.quote').html(quote);
    })
}