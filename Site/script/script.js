$(function(){
    getYear(); 
    openCategory();
    siginloginHide();
    siginShow();
    loginShow();
})

function getYear() {
    var date = new Date;
    var year = 'All rights reserved &copy; ' + date.getFullYear();
    console.log(year); 
    $('.privecy').html(year);
}

function openCategory() {
    $('.menu__item').on('click', function(){
        $('.menu__item').removeClass('active'); 
        $(this).addClass('active');
    })
}

function siginloginHide() {
    $('.pop_up_sigin').hide();
    $('.pop_up_login').hide();
}

function siginShow() {
    $('.signin').on('click', function() {
        $('.pop_up_sigin').show();
        $('.closeSignin').on('click', function() {
            $('.pop_up_sigin').hide(); 
        });
    })
}


function loginShow() {
    $('.login').on('click', function() {
        $('.pop_up_login').show();
        $('.closeLogin').on('click', function() {
            $('.pop_up_login').hide(); 
        });
    })
}
