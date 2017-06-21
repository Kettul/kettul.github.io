$(document).ready(function() {
  var wrapper = '.quote-wrapper';
  $(wrapper + " > .testimonial:gt(0)").hide();
  $(wrapper).fadeIn(1000);

  setInterval(function() {
    $(wrapper + ' > .testimonial:first')
      .fadeOut(1000)
      .next()
      .fadeIn(1000)
      .end()
      .appendTo(wrapper);
  }, 7000);

}); //End document ready