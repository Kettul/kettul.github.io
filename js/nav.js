// $.ajax({
//   dataType: 'jsonp',
//   url: "http://getsimpleform.com/messages/ajax?form_api_token=2eedfabcc3e8b43d26c493dbae420d7d",
//   data: {
//     name: "Kettul",
//     message: "This is the message",
//   }
// }).done(function() {
//   //callback which can be used to show a thank you message
//   //and reset the form
//   alert("Thank you for contacting us. We'll get in touch shortly.");
// });

$(document).ready(function() {
      navScroll();
  $(window).scroll(function() {    
      navScroll();
  });  

  function navScroll(){
    var scroll = $(window).scrollTop();

    if (scroll >= 1 && scroll < 680) {
        $("body").addClass("scrolled").removeClass('scrolled-more');
    } else if (scroll >= 680) {
        $("body").addClass("scrolled scrolled-more");
    } else {
        $("body").removeClass("scrolled scrolled-more");
    }
  }
}); //End document ready