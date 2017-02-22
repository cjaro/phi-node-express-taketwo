// console.log('sourced');
$(document).ready(function(){
  getFishData();
  function getFishData(){

    // console.log('ready to jquery');
    $.ajax({
      type: 'GET',
      url: '/fish',
      success: function(response){    //response is whatever we pass back in the function(req, res) in app.js
        // console.log(response);
        $('#fishTank').empty();
        for (var i = 0; i < response.length; i++) {
          $('#fishTank').append('<li>' + response[i].name + '</li>');
        }
      }
    });
    $.ajax({
      type: 'GET',
      url: '/fish/first/name',
      success: function(response){    //response is whatever we pass back in the function(req, res) in app.js
        // console.log(response);
        $('#firstFishy').text(response);
      }
    });

  } //ends getFishData

  $('#newFishButton').on('click', function(){
    var newFishObject = {};
    newFishObject.name = $('#newFishName').val();
    $.ajax({
      type: 'POST',
      url: '/fish/new',
      data: newFishObject,
      success: function(response){
        // console.log(response);
        getFishData();
      } //ends success response fxn
    }); //ends ajax
  }); //ends on click

}); //ends doc ready
