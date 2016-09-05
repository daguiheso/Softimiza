$(document).ready(function(){
  $('.parallax').parallax();




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


});
        