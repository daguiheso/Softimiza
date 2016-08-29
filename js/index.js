$(document).ready(function(){
  var options = {
    useEasing : true, 
    useGrouping : true, 
    separator : ',', 
    decimal : '.', 
    prefix : '$ ', 
    suffix : ' USD'
  };
  var demo = new CountUp("counter", 1000000, 42450000, 0, 1.5, options);

  $('.collapsible').collapsible({
    accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
  });
  
  var optionsScroll = [
    { 
      selector: '#counter',
      offset: 50, 
      callback: function(el) {
        // debugger
        Materialize.fadeInImage($(el));
      } 
    },
    {
      selector: '#counter',
      offset: 90,
      callback: function(el) {
        // debugger
        $(el).css( "opacity", "1");
        $(el).fadeIn("slow")
        demo.start();
      }
    },
    {
      selector: '.bgimg-2',
      offset: 150, 
      callback: function(el) {
        // debugger
        $(el).css( "opacity", ".4");
        // Materialize.fadeInImage($(el));
      }
    },
    {
      selector: '.bgimg-2',
      offset: 300,
      callback: function(el) {
        // debugger
        $(el).css( "opacity", ".6");
        // Materialize.fadeInImage($(el));
      }
    },
    {
      selector: '.bgimg-2',
      offset: 450, 
      callback: function(el) {
        // debugger
        $(el).css( "opacity", ".8");
        // Materialize.fadeInImage($(el));
      }
    },
    {
      selector: '.bgimg-2',
      offset: 600, 
      callback: function(el) {
        // debugger
        $(el).css( "opacity", "1");
        // Materialize.fadeInImage($(el));
      }
    },
    {
      selector: '.independence img',
      offset: 60, 
      callback: function(el) {
        // debugger
        $(el).addClass('animated bounceInRight');
        $('html').css("width", "100%")
        // Materialize.fadeInImage($(el));
      }
    }

  ];
  Materialize.scrollFire(optionsScroll);

});