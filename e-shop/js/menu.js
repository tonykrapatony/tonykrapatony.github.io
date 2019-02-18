$('li.contacts').on('click', function(){
    // перехід в розділ контакти
    var contacts = '';
    contacts += '<div class="contacts_bock">'
    contacts += '<h3>E-Shop</h3>';
    contacts += '<p>Lorem ipsum dolor sit amet, consectetur adipisic-ing elit.</p>';
    contacts += '<p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>';    
    contacts += '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5086.876906162345!2d30.638457001605232!3d50.39566586487417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5a1679247ec55e81!2z0JrQvtC70ZbQt9C10Lk!5e0!3m2!1suk!2sua!4v1549299780292" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>';    
    contacts += '</div>'
    $('main').html(contacts);
})
$('li.about').on('click', function(){
    // перехід в розділ про продукти
    var about = '';
    about += '<div class="contacts_bock">'
    about += '<h3>E-Shop</h3>';
    about += '<p>Lorem ipsum dolor sit amet, consectetur adipisic-ing elit.</p>';
    about += '<p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>';
    about += '<p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>';
    about += '</div>'
    $('main').html(about);
})