
// toggling navbar when hamburger icon clicked


// scroll to top button
$(window).scroll(function () {
    if ($(this).scrollTop() > 700) {
        $(".scroll_to_top").css({ opacity: "1" }).fadeIn();
    } else {
        $(".scroll_to_top").fadeOut();
    }
});

$(".scroll_to_top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 100);
});

// tooltips function initializing


//modal popup when window load in completed
// function showModal() {
//     if($(window).width() < 480){
//         $('#hector').modal('hide'); 

//     }
//     else{
//         $('#hector').modal('show');  
//     }
// }

// $(window).on('load', showModal);

// enquiry form
$('.btn-enquiry').click(function () {
    $(this).parents('.enquiry-form').toggleClass('active');
});




$(function () {

    window.sr = ScrollReveal();

    if ($(window).width() < 768) {

        if ($('.timeline-content').hasClass('js--fadeInRight')) {
            $('.timeline-content').removeClass('js--fadeInRight').addClass('js--fadeInLeft');
        }

        sr.reveal('.js--fadeInLeft', {
            origin: 'left',
            distance: '80px',
            easing: 'ease-in-out',
            duration: 800,
        });

    } else {

        sr.reveal('.js--fadeInLeft', {
            origin: 'left',
            distance: '120px',
            easing: 'ease-in-out',
            duration: 800,
        });

        sr.reveal('.js--fadeInRight', {
            origin: 'right',
            distance: '120px',
            easing: 'ease-in-out',
            duration: 800,
        });

    }

});
