$(document).ready(function() {
  $(".animsition").animsition({
    inClass: 'fade-in',
    outClass: 'fade-out',
    inDuration: 1500,
    outDuration: 800,
    linkElement: '.animsition-link',
    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
    loading: true,
    loadingParentElement: 'body', //animsition wrapper element
    loadingClass: 'animsition-loading',
    loadingInner: '', // e.g '<img src="loading.svg" />'
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: [ 'animation-duration', '-webkit-animation-duration'],
    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay : false,
    overlayClass : 'animsition-overlay-slide',
    overlayParentElement : 'body',
    transition: function(url){ window.location.href = url; }
  });
});
  jQuery(document).ready(function($) {
    var $slider = $('.my-slider').unslider({
      autoplay: true,
      arrows: false,
      animation: 'fade',
      delay: 15500,
      nav: true
    });

 $slider.on('mouseover', function() {
        $slider.data('unslider').stop();
    }).on('mouseout', function() {
        $slider.data('unslider').start();
    });

  });
  $(function() {
$(document).ready(function() {
  $('.smoothScroll').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-175
        }, 800); // The number here represents the speed of the scroll in milliseconds
        return false;
      }
    }
  });
});

// The function actually applying the offset
function offsetAnchor() {
    if(location.hash.length !== 0) {
        window.scrollTo(window.scrollX, window.scrollY - 175);
    }
}

// This will capture hash changes while on the page
$(window).on("hashchange",offsetAnchor);

// This is here so that when you enter the page with a hash,
// it can provide the offset in that case too. Having a timeout
// seems necessary to allow the browser to jump to the anchor first.
window.setTimeout(offsetAnchor, 5); // The delay of 1 is arbitrary and may not always work right (although it did in my testing).




$(window).scroll(function () {
    console.log($(window).scrollTop());
    var topDivHeight = $(".topdiv").height();
    var viewPortSize = $(window).height();
    var triggerAt = 350;
    var triggerHeight = (topDivHeight - viewPortSize) + triggerAt;
    if ($(window).scrollTop() >= triggerHeight) {
        $('.fadethisdiv').css('visibility', 'visible').hide().fadeIn();
        $(this).off('scroll');

    }
});
});