//Mobile menu
$(document).ready(function(){
  $(".popup-container").hide();
  $("#popup1open").click(function(){
      $("#popup1").fadeIn();
  });
  $("#popup1close").click(function(){
      $("#popup1").fadeOut();
  });
  $('#myCarousel').carousel({
          interval: 0
  });
  $('#carousel-text').html($('#slide-content-0').html());

  //Handles the carousel thumbnails
 $('[id^=carousel-selector-]').click( function(){
      var id = this.id.substr(this.id.lastIndexOf("-") + 1);
      var id = parseInt(id);
      $('#myCarousel').carousel(id);
  });


  // When the carousel slides, auto update the text
  $('#myCarousel').on('slid.bs.carousel', function (e) {
           var id = $('.item.active').data('slide-number');
          $('#carousel-text').html($('#slide-content-'+id).html());
  });

}); // scrolls down page when link is clicked
  $('.smoothScroll').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-175
        }, 800); 
        return false;
      }
    }
  });

// The function actually applying the offset
function offsetAnchor() {
    if(location.hash.length !== 0) {
        window.scrollTo(window.scrollX, window.scrollY - 175);
    }
}
