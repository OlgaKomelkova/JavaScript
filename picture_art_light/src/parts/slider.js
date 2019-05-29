/*jshint esversion: 6 */ 

function slider() {
    let slideIndex = 1,
    slides = document.querySelectorAll('.feedback-slider-item'),
    prev = document.querySelector('.main-prev-btn'),
    next = document.querySelector('.main-next-btn');
  
    showSlides(slideIndex);

   
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    prev.addEventListener('click', function() {
     plusSlides(-1);
  });
 
  next.addEventListener('click', function() {
     plusSlides(1);
  });
 
    function showSlides() {
    var i;
       for (i = 0; i < slides.length; i++) {
           slides[i].style.display = "none";
       }
    slideIndex++;
       if (slideIndex > slides.length) { 
          slideIndex = 1;
   }
       slides[slideIndex-1].style.display = "block";
       setTimeout(showSlides, 4000);
 }

}

module.exports = slider;