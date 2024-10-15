$(function() {

    $('.option').hover(
      function() {
        $('.option').removeClass('highlighted');
        $(this).addClass('highlighted');
      },
      function() {
        $(this).removeClass('highlighted');
        setTimeout(function() {
          if (!$('.option.highlighted').length) {
            $('.option.featured').addClass('highlighted');
          }
        }, 500);
      }
    ); 
    
  });

  let slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" activ", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " activ";
  }





  // chat
