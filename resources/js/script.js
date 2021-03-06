$(document).ready(function() {
//    STICKY NAVIGATION
    
    var waypoint = new Waypoint({
      element: $('.js--section-features'),
      handler: function(direction) {
            if (direction == "down") {
                $('nav').addClass('sticky');
            } 
            else {
                $('nav').removeClass('sticky');
            }
        }, offset: '60px;'
    })
});

//SCROLL ON CLICK

$(function() {

    $('a[href*=#]:not([href=#])').click(function() {

        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

            var target = $(this.hash);

            target = target.length ? target : $(['name=' + this.hash.slice(1) + ']']);

             if (target.length) {

               $('html, body').animate({

                 scrollTop: target.offset().top                               

                    }, 1000);

                    return false;           

               }

          }

    });
   
});