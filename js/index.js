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
      offset: 90,
      callback: function(el) {
        // debugger
        $(el).css( "opacity", "1");
        $(el).fadeIn("slow")
        demo.start();
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

  $('.bgimg-2')
    .waypoint(function(direction) {
      if (direction === 'down') {
        $(this.element).addClass('animated fadeOut');
        $(this.element).removeClass('fadeIn');
        $(this.element).css('min-height', '60%')
      }
      else {
        $(this.element).removeClass('fadeOut');
        $(this.element).addClass('fadeIn');
        $(this.element).css('min-height', '100%')
      }
    }, {
      offset: -250
    })

  $('.bgimg-3')
    .waypoint(function(direction) {
      if (direction === 'down') {
        $(this.element).addClass('animated fadeOut');
        $(this.element).removeClass('fadeIn');
        $(this.element).css('min-height', '50vh')
      }
      else {
        $(this.element).removeClass('fadeOut');
        $(this.element).addClass('fadeIn');
        $(this.element).css('min-height', '80vh')
      }
    }, {
      offset: '10px'
    })

});