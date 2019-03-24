
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
                autoplayHoverPause: false
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
  if ($(window).scrollTop() >= 330) {
  	$('body').css('padding-top', headerHeight);
    $('.site-header').addClass('fixed');
   }
   else {
   	$('body').css('padding-top', 0);
    $('.site-header').removeClass('fixed');
   }
});

$(document).ready(function(){

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
           items: 4
        }
    }
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

});
