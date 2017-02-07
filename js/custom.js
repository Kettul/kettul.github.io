$.ajax({
  dataType: 'jsonp',
  url: "http://getsimpleform.com/messages/ajax?form_api_token=2eedfabcc3e8b43d26c493dbae420d7d",
  data: {
    name: "Kettul",
    message: "This is the message",
  }
}).done(function() {
  //callback which can be used to show a thank you message
  //and reset the form
  alert("Thank you, for contacting us");
});