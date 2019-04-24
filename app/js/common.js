
function screenClass() {

    if($(window).innerWidth() > 960) {
        $('.services-grid').removeClass('owl-carousel');
    } else {
        $('.services-grid').addClass('owl-carousel');
            var owl2 = $('.services-grid');
            owl2.owlCarousel({
                items:1,
                loop:true,
                margin: 0,
                smartSpeed: 500,
                nav: true,
                dots: true,
                autoplayTimeout: 20000,
                autoplayHoverPause: false,
                responsiveClass: true,
                responsive : {
                    // breakpoint from 0 up
                    0 : {
                        items:1
                    },
                    // breakpoint from 480 up
                    480 : {
                       items:1
                    },
                    // breakpoint from 768 up
                    768 : {
                       items: 2
                    },
                    1000 : {
                       items: 2
                    }
                }
            });
    }

    if($(window).innerWidth() > 720) {
        $('.news-slider').owlCarousel('destroy'); 
    } else {
        $('.news-slider').owlCarousel({
      items: 1,
      loop: true,
      margin: 0,
      smartSpeed: 500,
      nav: false,
      dots: true,
      autoplayTimeout: 20000,
      autoplayHoverPause: false
      });
    }

  if ($(window).innerWidth() < 1200) {
    $('.cooperation-slider').owlCarousel({
      items: 1,
      loop: true,
      margin: 0,
      smartSpeed: 500,
      nav: false,
      dots: true,
      autoplayTimeout: 20000,
      autoplayHoverPause: false,
      responsive : {
        0 : {
          items: 1,
          loop: true,
          margin: 0,
          smartSpeed: 500,
          nav: false,
          dots: true,
          autoplayTimeout: 20000,
          autoplayHoverPause: false
        },
        720 : {
          items: 1,
          loop: true,
          margin: 0,
          smartSpeed: 500,
          nav: false,
          dots: true,
          autoplayTimeout: 20000,
          autoplayHoverPause: false
        }
    }
    });
    $('.cooperation-slider .tab-content').show();
  } else {
    $('.cooperation-slider').owlCarousel('destroy');
    // Init tab
    $('.tab-content').hide();
    $('.tab-content:first').show();
    $('.cooperation-tabs li:first').addClass('active');
    $('.cooperation-tabs li').click(function (event) {
      event.preventDefault();
      $('.cooperation-tabs li').removeClass('active');
      $(this).addClass('active');
      $('.tab-content').hide();

      var selectTab = $(this).find('a').attr("href");

      $(selectTab).fadeIn();
    });
  }


}

screenClass();

$(window).bind('resize',function(){
    screenClass();
});

// Fixed header if scroll 

let headerHeight = $('.site-header').innerHeight()

$(window).scroll(function(){

  if($(window).innerWidth() > 960) {

     if ($(window).scrollTop() >= 330) {
        $('body').css('padding-top', headerHeight);
        $('.site-header').addClass('fixed');
       }
       else {
        $('body').css('padding-top', 0);
        $('.site-header').removeClass('fixed');
     }

  }

});

$(document).ready(function(){


  $('.objects-more').click( function(e) {
    e.preventDefault();
    $(this).closest('.object-description').find('p').not(':first').slideToggle();
  });

  //$(element).is(":visible"); 

  $('.switch-line').click(function(e) {
    e.preventDefault();
    $('.catalog-content .card').addClass('card-line');
    $(this).addClass('active');
     $('.switch-column').removeClass('active');
  });

   $('.switch-column').click(function(e) {
    e.preventDefault();
    $('.catalog-content .card').removeClass('card-line');
    $(this).addClass('active');
    $('.switch-line').removeClass('active');
  });

 
  $('.priceList-acordion .priceList-acordion-title').click( function() {
    
    var findArticle = $(this).next('.priceList-acordion-content');
    var findWrapper = $(this).closest('.priceList-acordion-item');
    
    if (findArticle.is(':visible')) {
        findArticle.slideUp(500);
        findWrapper.removeClass('active');
      } else {
        findWrapper.find('>.priceList-acordion-content').slideUp();
        findArticle.slideDown(500);
        findWrapper.addClass('active');
      }
    
  });

  // let allPanels = $('.priceList-acordion-content').hide();
    
  // $('.priceList-acordion .priceList-acordion-title').click(function() {
  //   allPanels.slideUp();
  //   $(this).next().slideDown();
  //   return false;
  // });

  
  $('.popup').magnificPopup();

  //Galerry Popup
  $(".gallery--init").each(function() {
    $(this).magnificPopup({
      delegate: 'a',
      mainClass: 'mfp-zoom-in',
      type: 'image',
      tLoading: '',
      gallery:{
        enabled: true,
      },
      removalDelay: 300,
      callbacks: {
        beforeChange: function() {
          this.items[0].src = this.items[0].src + '?=' + Math.random();
        },
        open: function() {
          $.magnificPopup.instance.next = function() {
            var self = this;
            self.wrap.removeClass('mfp-image-loaded');
            setTimeout(function() { $.magnificPopup.proto.next.call(self); }, 120);
          }
          $.magnificPopup.instance.prev = function() {
            var self = this;
            self.wrap.removeClass('mfp-image-loaded');
            setTimeout(function() { $.magnificPopup.proto.prev.call(self); }, 120);
          }
        },
        imageLoadComplete: function() {
          var self = this;
          setTimeout(function() { self.wrap.addClass('mfp-image-loaded'); }, 16);
        }
      }
    });
  });


  $('.mobile-filter-btn').click(function(e) {
    e.preventDefault();
    $('.mobile-filter-btn').toggleClass('active');
    $('.catalog-sidebar').slideToggle();
    if ($(this).hasClass('active')) {
       $('.mobile-filter-btn span').text("Свернуть");
    } else {
      $('.mobile-filter-btn span').text("Фильтр");
    }
  })


  $('select').niceSelect();


  $('input,textarea').focus(function(){
   $(this).data('placeholder',$(this).attr('placeholder'))
          .attr('placeholder','');
  }).blur(function(){
     $(this).attr('placeholder',$(this).data('placeholder'));
  });

  $('[data-toggle="tooltip"]').tooltip();

	$('.mini-objects .mini-object').on('click', function(event) {
		event.preventDefault();
		let url = $(this).attr('href');
		$(this).closest('.slider-item').find('.details-image').css('background-image', 'url("' + url + '")');
	});

	$(".header-owl-carousel").owlCarousel({
  	items: 3,
  	loop:true,
		nav: true,
		dots: true,
		smartSpeed: 700,
		navText: ['<img src="img/fill-1.svg">','<img src="img/fill-1.svg">'],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			}
		}
	});

	$(".bestsellers-slider").owlCarousel({
  	items: 4,
  	loop:true,
  	margin: 15,
		nav: true,
		dots: true,
		smartSpeed: 700,
		navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38"> <g fill="none" fill-rule="evenodd" transform="translate(1 1)"> <circle cx="18" cy="18" r="18" stroke="#EFF1F1" stroke-width="2"/> <path fill="#000" d="M20.23 13.16a.537.537 0 0 0-.766 0 .541.541 0 0 0 0 .76l3.881 3.88H10.537a.541.541 0 0 0 0 1.081h12.808l-3.881 3.873a.55.55 0 0 0 0 .765.537.537 0 0 0 .765 0l4.8-4.8a.525.525 0 0 0 0-.756l-4.8-4.802z"/> </g> </svg>','<svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38"> <g fill="none" fill-rule="evenodd" transform="translate(1 1)"> <circle cx="18" cy="18" r="18" stroke="#EFF1F1" stroke-width="2"/> <path fill="#000" d="M20.23 13.16a.537.537 0 0 0-.766 0 .541.541 0 0 0 0 .76l3.881 3.88H10.537a.541.541 0 0 0 0 1.081h12.808l-3.881 3.873a.55.55 0 0 0 0 .765.537.537 0 0 0 .765 0l4.8-4.8a.525.525 0 0 0 0-.756l-4.8-4.802z"/> </g> </svg>'],
		responsiveClass: true,
	 	responsive : {
        // breakpoint from 0 up
        0 : {
            items:1
        },
        // breakpoint from 480 up
        480 : {
           items:1
        },
        // breakpoint from 768 up
        768 : {
           items: 3
        },
        1000 : {
           items: 4
        }
    }
	});

  $(".project-full-slider").owlCarousel({
    items: 1,
    loop:true,
    // animateOut: 'fadeOut',
    // animateIn: 'fadeIn',
    margin: 0,
    nav: true,
    dots: true,
    smartSpeed: 700,
    center: true
    // responsive: {
    //  0: {
    //    items: 1
    //  }
    // }
  }).on('initialized.owl.carousel', function() {
    let titlePrev = $('.project-full-slider .owl-item.center').prev().find('.base-title').text();
    let titleNext = $('.project-full-slider .owl-item.center').next().find('.base-title').text();
    $('.slider-title-prev').text(titlePrev);
    $('.slider-title-next').text(titleNext);
  }).on('translated.owl.carousel', function() {
    let titlePrev = $('.project-full-slider .owl-item.center').prev().find('.base-title').text();
    let titleNext = $('.project-full-slider .owl-item.center').next().find('.base-title').text();
    $('.slider-title-prev').text(titlePrev);
    $('.slider-title-next').text(titleNext);
  });

  $('.next-wrap').click(function() {
    $('.project-full-slider button.owl-next').trigger('click');
  });

  $('.prev-wrap').click(function() {
    $('.project-full-slider button.owl-prev').trigger('click');
  });

  $(".gallery-popup").owlCarousel({
    loop: true,
    items: 1,
    thumbs: true,
    margin: -1,
    thumbImage: true,
    thumbContainerClass: 'owl-thumbs',
    thumbItemClass: 'owl-thumb-item',
    nav: true,
    navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38"> <g fill="none" fill-rule="evenodd" transform="translate(1 1)"> <circle cx="18" cy="18" r="18" stroke="#EFF1F1" stroke-width="2"/> <path fill="#000" d="M20.23 13.16a.537.537 0 0 0-.766 0 .541.541 0 0 0 0 .76l3.881 3.88H10.537a.541.541 0 0 0 0 1.081h12.808l-3.881 3.873a.55.55 0 0 0 0 .765.537.537 0 0 0 .765 0l4.8-4.8a.525.525 0 0 0 0-.756l-4.8-4.802z"/> </g> </svg>','<svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38"> <g fill="none" fill-rule="evenodd" transform="translate(1 1)"> <circle cx="18" cy="18" r="18" stroke="#EFF1F1" stroke-width="2"/> <path fill="#000" d="M20.23 13.16a.537.537 0 0 0-.766 0 .541.541 0 0 0 0 .76l3.881 3.88H10.537a.541.541 0 0 0 0 1.081h12.808l-3.881 3.873a.55.55 0 0 0 0 .765.537.537 0 0 0 .765 0l4.8-4.8a.525.525 0 0 0 0-.756l-4.8-4.802z"/> </g> </svg>'],
    responsiveClass: true
  });

	$(".objects-slider").owlCarousel({
  	items: 1,
  	loop:true,
  	animateOut: 'fadeOut',
  	animateIn: 'fadeIn',
  	margin: 5,
		nav: true,
		dots: true,
		smartSpeed: 700,
		navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38"> <g fill="none" fill-rule="evenodd" transform="translate(1 1)"> <circle cx="18" cy="18" r="18" stroke="#EFF1F1" stroke-width="2"/> <path fill="#000" d="M20.23 13.16a.537.537 0 0 0-.766 0 .541.541 0 0 0 0 .76l3.881 3.88H10.537a.541.541 0 0 0 0 1.081h12.808l-3.881 3.873a.55.55 0 0 0 0 .765.537.537 0 0 0 .765 0l4.8-4.8a.525.525 0 0 0 0-.756l-4.8-4.802z"/> </g> </svg>','<svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38"> <g fill="none" fill-rule="evenodd" transform="translate(1 1)"> <circle cx="18" cy="18" r="18" stroke="#EFF1F1" stroke-width="2"/> <path fill="#000" d="M20.23 13.16a.537.537 0 0 0-.766 0 .541.541 0 0 0 0 .76l3.881 3.88H10.537a.541.541 0 0 0 0 1.081h12.808l-3.881 3.873a.55.55 0 0 0 0 .765.537.537 0 0 0 .765 0l4.8-4.8a.525.525 0 0 0 0-.756l-4.8-4.802z"/> </g> </svg>'],
		responsiveClass: true,
		// responsive: {
		// 	0: {
		// 		items: 1
		// 	}
		// }
	});

  $(".manufactures-slider").owlCarousel({
    items: 8,
    loop: true,
    margin: 15,
      nav: true,
      dots: true,
      smartSpeed: 700,
      navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38"> <g fill="none" fill-rule="evenodd" transform="translate(1 1)"> <circle cx="18" cy="18" r="18" stroke="#EFF1F1" stroke-width="2"/> <path fill="#000" d="M20.23 13.16a.537.537 0 0 0-.766 0 .541.541 0 0 0 0 .76l3.881 3.88H10.537a.541.541 0 0 0 0 1.081h12.808l-3.881 3.873a.55.55 0 0 0 0 .765.537.537 0 0 0 .765 0l4.8-4.8a.525.525 0 0 0 0-.756l-4.8-4.802z"/> </g> </svg>','<svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38"> <g fill="none" fill-rule="evenodd" transform="translate(1 1)"> <circle cx="18" cy="18" r="18" stroke="#EFF1F1" stroke-width="2"/> <path fill="#000" d="M20.23 13.16a.537.537 0 0 0-.766 0 .541.541 0 0 0 0 .76l3.881 3.88H10.537a.541.541 0 0 0 0 1.081h12.808l-3.881 3.873a.55.55 0 0 0 0 .765.537.537 0 0 0 .765 0l4.8-4.8a.525.525 0 0 0 0-.756l-4.8-4.802z"/> </g> </svg>'],
      responsiveClass: true,
      responsive : {
        0 : {
          items: 2,
          loop: true,
          margin: 0,
          smartSpeed: 500,
          nav: false,
          dots: true,
          autoplayTimeout: 20000,
          autoplayHoverPause: false
        },
        480 : {
          items: 3
        },
        600 : {
          items: 4
        },
        720 : {
          items: 4
        },
        900 : {
          items: 6
        },
        1100 : {
          items: 6
        },
        1200 : {
          items: 8
        }
    }
  });

    $(".feedback-slider").owlCarousel({
      items: 2,
      loop:true,
      margin: 15,
      nav: true,
      dots: true,
      smartSpeed: 700,
      navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38"> <g fill="none" fill-rule="evenodd" transform="translate(1 1)"> <circle cx="18" cy="18" r="18" stroke="#EFF1F1" stroke-width="2"/> <path fill="#000" d="M20.23 13.16a.537.537 0 0 0-.766 0 .541.541 0 0 0 0 .76l3.881 3.88H10.537a.541.541 0 0 0 0 1.081h12.808l-3.881 3.873a.55.55 0 0 0 0 .765.537.537 0 0 0 .765 0l4.8-4.8a.525.525 0 0 0 0-.756l-4.8-4.802z"/> </g> </svg>','<svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38"> <g fill="none" fill-rule="evenodd" transform="translate(1 1)"> <circle cx="18" cy="18" r="18" stroke="#EFF1F1" stroke-width="2"/> <path fill="#000" d="M20.23 13.16a.537.537 0 0 0-.766 0 .541.541 0 0 0 0 .76l3.881 3.88H10.537a.541.541 0 0 0 0 1.081h12.808l-3.881 3.873a.55.55 0 0 0 0 .765.537.537 0 0 0 .765 0l4.8-4.8a.525.525 0 0 0 0-.756l-4.8-4.802z"/> </g> </svg>'],
      responsiveClass: true,
      responsive : {
          // breakpoint from 0 up
          0 : {
              items:1
          },
          // breakpoint from 480 up
          480 : {
             items:1
          },
          // breakpoint from 768 up
          768 : {
             items: 1
          },
          1000 : {
             items: 2
          }
      }
    });

});

$(document).ready(function() {
  $('.minus').click(function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $('.plus').click(function () {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });
});

$('.office-slider').owlCarousel({
  items: 6,
  loop: true,
  margin: 13,
  //autoWidth: true,
  nav: true,
  dots: false,
  navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38"> <g fill="none" fill-rule="evenodd" transform="translate(1 1)"> <circle cx="18" cy="18" r="18" stroke="#EFF1F1" stroke-width="2"/> <path fill="#000" d="M20.23 13.16a.537.537 0 0 0-.766 0 .541.541 0 0 0 0 .76l3.881 3.88H10.537a.541.541 0 0 0 0 1.081h12.808l-3.881 3.873a.55.55 0 0 0 0 .765.537.537 0 0 0 .765 0l4.8-4.8a.525.525 0 0 0 0-.756l-4.8-4.802z"/> </g> </svg>','<svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38"> <g fill="none" fill-rule="evenodd" transform="translate(1 1)"> <circle cx="18" cy="18" r="18" stroke="#EFF1F1" stroke-width="2"/> <path fill="#000" d="M20.23 13.16a.537.537 0 0 0-.766 0 .541.541 0 0 0 0 .76l3.881 3.88H10.537a.541.541 0 0 0 0 1.081h12.808l-3.881 3.873a.55.55 0 0 0 0 .765.537.537 0 0 0 .765 0l4.8-4.8a.525.525 0 0 0 0-.756l-4.8-4.802z"/> </g> </svg>'],
  responsiveClass: true,
  responsive: {
    0: {
      items: 3
    },
    480: {
      items: 3
    },
    768: {
      items: 6
    },
    1000: {
       items: 6
    }
  }
});



