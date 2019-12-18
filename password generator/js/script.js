$(function(){
    $('.generate-btn').on('click', generate);
})

function generate(){
    var ints =[0,1,2,3,4,5,6,7,8,9,0]; 
    var chars=['a','b','c','d','e','f','g','h','j','k','l','m','n','o','p','r','s','t','u','v','w','x','y','z'];
    var out='';  
    var checked = [];
    $('input:radio:checked').each(function() {
        checked.push($(this).val());
    });
    
    for (var i=0; i<+checked; i++){
        var a = Math.random();
//        console.log(a);
        if (a>0.5){
            var b = Math.ceil(Math.random(1, chars.length)*23);
//            console.log(b);
            out += chars[b];   
        } else {
            var b = Math.ceil(Math.random(1, ints.length)*10);
//            console.log(b);
            out += ints[b];
        }
    }
    console.log(out);
    console.log(+checked);
    $('.password').html(out);
}