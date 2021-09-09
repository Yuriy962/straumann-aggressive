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

    $('a[href^="#"]:not(a.popup)').on('click', function() {
        let href = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(href).offset().top
        });
        return false;
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