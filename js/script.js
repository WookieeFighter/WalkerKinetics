
$(document).ready(function(){

	$('.primary-button').click(function(){
			$('nav').removeClass('hide');
			$('.primary-button').addClass('hide');
			$("body").css("overflow", "hidden");
	}); 

	$('nav, .nav-popup').click(function(){
			$('nav').addClass('hide');
			$('.primary-button').removeClass('hide');
			$("body").css("overflow", "visible");
	}); 



	$('.panel-title').click(function(){

		if($(".fa-caret-right",this).hasClass('rotate-caret')){
			$(".fa-caret-right").removeClass('rotate-caret');
			}else{
			$(".fa-caret-right").not(this).removeClass('rotate-caret');
			$(".fa-caret-right",this).addClass('rotate-caret');
		}


	});

    scaleVideoContainer();

    initBannerVideoSize('.video-container .poster img');
    initBannerVideoSize('.video-container .filter');
    initBannerVideoSize('.video-container video');

    $(window).on('resize', function() {
        scaleVideoContainer();
        scaleBannerVideoSize('.video-container .poster img');
        scaleBannerVideoSize('.video-container .filter');
        scaleBannerVideoSize('.video-container video');
    });


function scaleVideoContainer() {

    var height = $(window).height() + 5;
    var unitHeight = parseInt(height) + 'px';
    $('.homepage-hero-module').css('height',unitHeight);

}

function initBannerVideoSize(element){

    $(element).each(function(){
        $(this).data('height', $(this).height());
        $(this).data('width', $(this).width());
    });

    scaleBannerVideoSize(element);

}

function scaleBannerVideoSize(element){

    var windowWidth = $(window).width(),
    windowHeight = $(window).height() + 5,
    videoWidth,
    videoHeight;

    console.log(windowHeight);

    $(element).each(function(){
        var videoAspectRatio = $(this).data('height')/$(this).data('width');

        $(this).width(windowWidth);

        if(windowWidth < 1000){
            videoHeight = windowHeight;
            videoWidth = videoHeight / videoAspectRatio;
            $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

            $(this).width(videoWidth).height(videoHeight);
        }

        $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

    });
}


    var headerHeight = $('.homepage-hero-module').height();

    console.log(headerHeight);


    $('#down-arrow').click(function(){
        $('body, html').animate({ scrollTop: headerHeight },1000);

    });
});