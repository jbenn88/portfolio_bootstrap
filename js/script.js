$(document).ready(function() {
  // Dims nav options and footer on page load
  $('.nav li, .footer p').fadeTo('slow', 0.3);


  // Brightens nav options when mouse enters, back to opaque when leaving
  $('.nav li').on ({
    mouseenter: function(){
      $(this).fadeTo('fast', 1);
      },
    mouseleave: function(){
      $(this).fadeTo('fast', 0.3);
      }
  });

    // Changes display of button when mouse enters / leaves
    $('.button').on({
      mouseenter: function() {
        $(this).addClass('active');
      },
      mouseleave: function() {
        $(this).removeClass('active');
      },
  });
});
