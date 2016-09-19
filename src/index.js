$(document).ready(function(){
  $('.parallax').parallax();

  // Acordions
  $('.collapsible').collapsible({
    accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
  });



  var options = {
    useEasing : true, 
    useGrouping : true, 
    separator : ',', 
    decimal : '.', 
    prefix : '', 
    suffix : '' 
  };
  var demo = new CountUp("counter", 0, 42.5, 1, 5.5, options);


  // Waypoints
  $('.sectionOne')
    .waypoint(function(direction) {
      // debugger
        $('.num').addClass('animated fadeIn');
        $('.sectionOne .wrapper').css( "transform", "translate(-50%, -65%");
        $('.sectionOne .wrapper').css( "-webkit-transform", "translate(-50%, -75%)");
        demo.start();
    }, {
      offset: '5%'
    })

  $('#Servicios')
    .waypoint(function(direction) {
      if (direction === 'down') {
        $('#Laberinto').addClass('animated fadeOut');
        $('#Laberinto').removeClass('fadeIn');
        // $(this.element).css('min-height', '60%')
      }
      else {
        $('#Laberinto').removeClass('fadeOut');
        $('#Laberinto').addClass('fadeIn');
        // $('#Laberinto').css('min-height', '100%')
      }
    }, {
      offset: '35%'
    })

  $('#Quotes')
    .waypoint(function(direction) {
      if (direction === 'down') {
        $('#quote1').addClass('animated fadeIn');
        $('#quote1').removeClass('fadeOut');
      }
      else {
        $('#quote1').addClass('animated fadeOut');
        $('#quote1').removeClass('fadeIn');
      }
    }, {
      offset: '60%'
    })

  $('#Quotes')
    .waypoint(function(direction) {
      if (direction === 'down') {
        $('#quote2').addClass('animated fadeIn');
        $('#quote2').removeClass('fadeOut');
      }
      else {
        $('#quote2').addClass('fadeOut');
        $('#quote2').removeClass('fadeIn');
      }
    }, {
      offset: '30%'
    })

  $('#Quotes')
    .waypoint(function(direction) {
      if (direction === 'down') {
        $('#quote3').addClass('animated fadeIn');
        $('#quote3').removeClass('fadeOut');
      }
      else {
        $('#quote3').addClass('fadeOut');
        $('#quote3').removeClass('fadeIn');
      }
    }, {
      offset: '10%'
    })

    // FORM POST

  // var name = document.getElementById("icon_prefix").value;
  // var contact = document.getElementById("icon_telephone").value;
  // var email = document.getElementById("icon_email").value;

  // var data = {
  //   name: name,
  //   telephone: telephone,
  //   email: email
  // }

  $.post( "../form/proces.php", $( "#contacto" ).serialize(), json )
    .done(function(res) {

    })

});
