$(document).ready(function () {
    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        loop: true,
        effect: 'fade',
        autoplay: {
            delay: 10000,
        },
    
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
    });
});