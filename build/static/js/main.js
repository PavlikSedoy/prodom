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

    // Reviews slider in review section
    var mySwiperReviews = new Swiper('.reviews-slider-in-section', {
        // Optional parameters
        loop: false,
        slidesPerView: 4,
        spaceBetween: 83,
        centerInsufficientSlides: true
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

    // Examples lightbox
    lightGallery(document.getElementById('cexGallery'), {
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

    // Reset filters
    $('#resetFilters').click( function(e) {
        e.preventDefault();

        $('#buildingType').val('');
        $('#buildingType').next('.select-styled').text('');
        $('#workType').val('');
        $('#workType').next('.select-styled').text('');
    })
});