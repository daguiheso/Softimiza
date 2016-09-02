$(document).ready(function(){

  var consulta =  window.matchMedia('(max-width:500px)'); 
  consulta.addListener(mediaQuery);
  mediaQuery ();

  // Counter
  var options = {
    useEasing : true, 
    useGrouping : true, 
    separator : ',', 
    decimal : '.', 
    prefix : '', 
    suffix : '' 
  };
  var demo = new CountUp("counter", 0, 42.5, 1, 5.5, options);

  // Acordions
  $('.collapsible').collapsible({
    accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
  });
  
  // Scroll fire
  var optionsScroll = [
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

  
    function mediaQuery () {
      if (consulta.matches) {
        console.log('se cumplio')
        
      }
      else {
        console.log('no se cumplio')
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
              $(this.element).css('min-height', '60vh')
            }
            else {
              $(this.element).removeClass('fadeOut');
              $(this.element).addClass('fadeIn');
              $(this.element).css('min-height', '80vh')
            }
          }, {
            offset: '-20%'
          })

        $('.bgimg-3')
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
            offset: '80%'
          })

        $('.bgimg-3')
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
            offset: '60%'
          })

        $('.bgimg-3')
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
            offset: '40%'
          })
      }
    }
  

  // Waypoints
  $('.bgimg-1')
    .waypoint(function(direction) {
        $('.num').addClass('animated fadeIn');
        $('.bgimg-1 .caption.caption1').css( "transform", "translate(-50%, -50");
        $('.bgimg-1 .caption.caption1').css( "-webkit-transform", "translate(-50%, -50%)");
        demo.start();
    }, {
      offset: '-10%'
    })

  

});