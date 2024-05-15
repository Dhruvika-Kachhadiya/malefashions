$(document).ready(function(){
  // Top scroll
  var btn = $('#top_scroll');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

  // Header sticky
  $(window).scroll(function(){
    var sticky = $('.sticky'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 100) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
  });

  // Pre loader
  $(document).ready(function(){
    setTimeout(function() {
      $('.pre_loader').fadeOut();
    },3000);
  })



    // Shop -detail page -- Hash slider
    $('#shop_slider').owlCarousel({
      loop:false,
      margin:10,
      nav:false,
      dots:false,
      items:1,
      animateIn:true,
  })  
  $('.thumbnail>a').click(function(){
    $('.thumbnail a').removeClass('active');
    $(this).addClass('active');
})


// Shop Page - accordian
    
    document.querySelectorAll(".accordion-item").forEach((item) => {
        item.querySelector(".accordion-item-header").addEventListener("click", () => {
          item.classList.toggle("open");
        });
      });
    
    // About US Page - counter
    var counted = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (counted == 0 && $(window).scrollTop() > oTop) {
    $('.count').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    counted = 1;
  }

}); 
    
      // Home page -Time counter

    var target_date = new Date().getTime() + (1000*3600*48); // set the countdown date
    var days, hours, minutes, seconds; // variables for time units

    var countdown = document.getElementById("tiles"); // get tag element

    getCountdown();

    setInterval(function () { getCountdown(); }, 1000);

    function getCountdown(){

        // find the amount of "seconds" between now and target
        var current_date = new Date().getTime();
        var seconds_left = (target_date - current_date) / 1000;

        days = pad( parseInt(seconds_left / 86400) );
        seconds_left = seconds_left % 86400;
            
        hours = pad( parseInt(seconds_left / 3600) );
        seconds_left = seconds_left % 3600;
            
        minutes = pad( parseInt(seconds_left / 60) );
        seconds = pad( parseInt( seconds_left % 60 ) );

        // format countdown string + set tag value
        countdown.innerHTML = "<span>" + days + "</span><span>" + hours + "</span><span>" + minutes + "</span><span>" + seconds + "</span>"; 
    }

    function pad(n) {
        return (n < 10 ? '0' : '') + n;
    }

    

    //HomePage-- Banner slider
    
    $('#banner-slider').owlCarousel({
        loop:true,
        items:1,
        nav:true,
        dots:false,
        navText:['prev','next'],
        navText:['<i class="fas fa-arrow-left"></i>','<i class="fas fa-arrow-right"></i>'],
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        smartSpeed:600,
        autoplay: false,
        
    })
    AOS.init();


  

    
    


})