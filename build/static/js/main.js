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
    if ( $('.section-clients__swiper-slide').length > 6 || $(window).width() < 768 ) {
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
            breakpoints: {
                320: {
                  slidesPerView: 3,
                },
                768: {
                    slidesPerView: 6,
                }
            }
        });
    }

    // Sertificates slider
    var mySwiperSertificates = new Swiper('.sertificates-slider', {
        // Optional parameters
        loop: false,
        spaceBetween: 12,
        breakpoints: {
            // when window width is >= 640px
            320: {
              slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            }
        }
    });

    // Reviews slider
    var mySwiperReviews = new Swiper('.reviews-slider', {
        // Optional parameters
        loop: false,
        spaceBetween: 12,
        breakpoints: {
            320: {
              slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            }
        }
    });

    // Reviews slider in review section
    var mySwiperReviews = new Swiper('.reviews-slider-in-section', {
        // Optional parameters
        loop: false,
        centerInsufficientSlides: true,
        breakpoints: {
            320: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 80,
            }
        }
    });

    // Sertificates lightbox
    lightGallery(document.getElementById('sertificatesLightbox'), {
        thumbnail:true
    }); 

    // Reviews lightbox
    lightGallery(document.getElementById('reviewsLightbox'), {
        thumbnail:true
    }); 

    // Examples lightbox
    lightGallery(document.getElementById('examplesGallery'), {
        thumbnail:true
    }); 

    // Cex lightbox
    lightGallery(document.getElementById('cexGallery'), {
        thumbnail:true
    }); 
    
    // Project lightbox
    lightGallery(document.getElementById('objectGallery'), {
        thumbnail:true
    }); 
    
    // Post lightbox
    lightGallery(document.getElementById('postGallery'), {
        thumbnail:true
    }); 

    // Portfolio-slider
    var mySwiperPortfolio = new Swiper('.section-portfolio__slider', {
        // Optional parameters
        loop: false,
        slidesPerView: 'auto',
        spaceBetween: 20,
    });
});

// On add file to bottom form
$('#bottomFormFile').change( function () {
    var fileName = $(this).val();

    if (/^\s*$/.test(fileName)) {
        $('#fileName').text('');
    } else {
        $("#fileName").text(fileName.replace("C:\\fakepath\\", ""))
    }
});

// On add file to popup form
$('#popupFormFile').change( function () {
    var fileName = $(this).val();

    if (/^\s*$/.test(fileName)) {
        $('#fileNamePopup').text('');
    } else {
        $("#fileNamePopup").text(fileName.replace("C:\\fakepath\\", ""))
    }
});

// Show/hide examples gallery in metal page
$('#examplesHeader').click( function() {
    $('#examplesToggleBox').slideToggle();
});

// Customize select
$('select').each(function(){
    var $this = $(this), numberOfOptions = $(this).children('option').length;
  
    $this.addClass('select-hidden'); 
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="select-styled"></div>');

    var $styledSelect = $this.next('div.select-styled');
    $styledSelect.text($this.children('option').eq(0).text());
  
    var $list = $('<ul />', {
        'class': 'select-options'
    }).insertAfter($styledSelect);
  
    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
    }
  
    var $listItems = $list.children('li');
  
    $styledSelect.click(function(e) {
        e.stopPropagation();
        $('div.select-styled.active').not(this).each(function(){
            $(this).removeClass('active').next('ul.select-options').hide();
        });
        $(this).toggleClass('active').next('ul.select-options').toggle();
    });
  
    $listItems.click(function(e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));
        $list.hide();
        // console.log($('#buildingType').val());
    });
  
    $(document).click(function() {
        $styledSelect.removeClass('active');
        $list.hide();
    });
});

// Reset filters
$('#resetFilters').click( function(e) {
    e.preventDefault();

    $('#buildingType').val('');
    $('#buildingType').next('.select-styled').text('');
    $('#workType').val('');
    $('#workType').next('.select-styled').text('');
});

// Close popup when user click outsite popup
$(document).click( function(e) {
    if (!$(e.target).parents().addBack().is('.popup__wr')) {
        $('.popup').fadeOut();
    }

    if (!$(e.target).parents().addBack().is('.mobile-nav__wr')) {
        $('#mobileNav').removeClass('active').fadeOut(1000);
    }
});

// Open popup
$('.btn-popup').click( function(e) {
    e.preventDefault();
    e.stopPropagation();
    
    var popupType = $(this).data('modal');

    if ( popupType == 'request' ) {
        $('#requestPopUp').fadeIn();
    }
    if ( popupType == 'consultation' ) {
        $('#consultationPopup').fadeIn();
    }
    if ( popupType == 'subscribe' ) {
        $('#subscribePopup').fadeIn();
    }
});

// Close popup
$('.popup__close').click( function(e) {
    e.preventDefault();

    $('.popup').fadeOut();
});

// Hamburger
$('#hamburger').click( function(e) {
    e.preventDefault();
    e.stopPropagation();

    $('#mobileNav').fadeIn().addClass('active');
});