$(window).on('load', () => {

    // var header = document.querySelector('.header__inner');
    // var sticky = header.offsetTop;

    // $(this).scroll(function () {
    //     if(window.pageYOffset > sticky){
    //         header.classList.add('position-fixed');
    //     }else{
    //         header.classList.remove('position-fixed');
    //     }
    // });

    const menu = document.querySelector('.menu'),
    hamburger = document.querySelector('.hamburger'),
    menuItem = document.querySelectorAll('.menu__item, .menu__link'),
    menuPhone = document.querySelector('.header__phone'),
    menuText = document.querySelector('.header__text');
    

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger--active');
        menu.classList.toggle('menu--active');
        menuText.classList.toggle('d-block'),
        menuPhone.classList.toggle('d-none');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.remove('hamburger--active');
            menu.classList.remove('menu--active');
        });
    });


    $('a[href^="#"]:not(a.popup)').on('click', function() {
        let href = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(href).offset().top
        });
        return false;
    });

    $('.certificates').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: 
        '<button type="button" class="slick-arrow slick-prev">' +
            '<svg viewBox="0 0 18 32" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                '<path class="slick-arrow-img" d="M17 1L2 16L17 31" stroke="white" stroke-width="2"/>' +
            '</svg>' + 
        '</button>',
        nextArrow: 
        '<button type="button" class="slick-arrow slick-next">'+
            '<svg viewBox="0 0 18 32" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                '<path class="slick-arrow-img" d="M1 31L16 16L0.999997 1" stroke="white" stroke-width="2"/>' +
            '</svg>' +
        '</button>'
    });


    // Отправка формы
    // $("form").on("submit", (function (e) {
    //     e.preventDefault();
    //     let form = $(this);
    //     let formData = $(this).serialize();
    //     let inputDoctor = form.find('input[name="doctor"]');
    //     if(inputDoctor.length > 0){
    //         formData += '&doctor=' + inputDoctor.val();
    //     }
    //     return $.ajax({
    //         type: "POST",
    //         url: "../send.php",
    //         data: formData,
    //         success: function (e) {
    //             e = JSON.parse(e);
    //             console.log(e.result);
    //             if("success" === e.result){
    //                 form.find('.form-message--success').css('display', 'block');
    //             }else{
    //                 form.find('.form-message--error').css('display', 'block');
    //             }
    //             form.find("input[type='name'], input[type='tel'], input[name='doctor']").val("").val(""), $("form").trigger("reset");
    //         }
    //     });
    // }));

    $().fancybox();

    $('input[type="tel"]').inputmask('+7 (999) 999-99-99');

});

// Map
// YaMapsShown = false; 
// $(window).on('scroll', function() {
//     if (!YaMapsShown){
//         if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {      
//         showYaMaps();
//         YaMapsShown = true;
//         }
//     }
// });