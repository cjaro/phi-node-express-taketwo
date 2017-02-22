console.log('sourced');
$(document).ready(function(){
  console.log('ready to jquery');
  $.ajax({
    type: 'GET',
    url: '/fish',
    success: function(response){    //response is whatever we pass back in the function(req, res) in app.js
      console.log(response);
      for (var i = 0; i < response.length; i++) {
        $('#fishTank').append('<li>' + response[i].name + '</li>');
      }
    }
  });
  $.ajax({
    type: 'GET',
    url: '/fish/first/name',
    success: function(response){    //response is whatever we pass back in the function(req, res) in app.js
      console.log(response);
      $('#firstFishy').text(response);
    }
  });
});
