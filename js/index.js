$(document).ready(function(){
  var options = {
    useEasing : true, 
    useGrouping : true, 
    separator : ',', 
    decimal : '.', 
    prefix : '', 
    suffix : ''
  };
  var demo = new CountUp("counter", 1000000, 42450000, 0, 2.5, options);

  $('.collapsible').collapsible({
    accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
  });
  
  var optionsScroll = [
    { selector: '#counter',
      offset: 50, 
      callback: function(el) {
        // debugger
        Materialize.fadeInImage($(el));
      } 
    },
    {
      selector: '#counter',
      offset: 220,
      callback: function(el) {
        // debugger
        demo.start();
      }
    },
    {
      selector: '#image-test',
      offset: 500, 
      callback: function(el) { 
        Materialize.fadeInImage($(el));
      }
    } 
  ];
  Materialize.scrollFire(optionsScroll);

});