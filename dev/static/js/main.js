$(document).ready(function () {
    // Home header slider
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
          type: 'fraction',
        },
    });

    // Clients slider
    if ( $('.section-clients__swiper-slide').length > 6 ) {
        $('.section-clients__swiper-slide').each( function () {
            $(this).css('flex-basis', 'auto');
        });
        var mySwiperClients = new Swiper('.section-clients__swiper-container', {
            // Optional parameters
            loop: true,
            slidesPerView: 6,
            speed: 3000,

            autoplay: {
                delay: 2000,
            },
        });
    }

    // Sertificates slider
    var mySwiperSertificates = new Swiper('.sertificates-slider', {
        // Optional parameters
        loop: false,
        slidesPerView: 3,
        spaceBetween: 12,
    });

    // Reviews slider
    var mySwiperReviews = new Swiper('.reviews-slider', {
        // Optional parameters
        loop: false,
        slidesPerView: 3,
        spaceBetween: 12,
    });

    // Sertificates lightbox
    lightGallery(document.getElementById('sertificatesLightbox'), {
        thumbnail:true
    }); 

    // Reviews lightbox
    lightGallery(document.getElementById('reviewsLightbox'), {
        thumbnail:true
    }); 
});