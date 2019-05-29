 /*jshint esversion: 6 */ 
 document.addEventListener('DOMContentLoaded', function() {
   
"use strict";
	 let accordion = require('./parts/accordion.js'),
	     burger = require('./parts/burger.js'),
		   calc = require('./parts/calc.js'),
       form = require('./parts/form.js'),
       modal = require('./parts/modal.js'),
       portfolio = require('./parts/portfolio.js'),
       slider = require('./parts/slider.js');


    accordion();
    burger();
    calc();
    form();
    modal();    
    slider();
    portfolio();
});

//Modal 
 /*let design = document.body.querySelectorAll('.button-design'),
     overlay = document.body.querySelector('.popup-design'),
     close = document.body.querySelectorAll('.popup-close'),
     consultation = document.body.querySelectorAll('.button-consultation'),
     questions = document.body.querySelector('.popup-consultation'),
     gift = document.body.querySelector('.fixed-gift'),
     dialog = document.body.querySelector('.popup-gift'),
     container = document.body.querySelector('.container'),
     order = document.body.querySelector('.button-order');


function showModalPopup() {
     overlay.style.display = 'block';
     this.classList.add('splash');
     document.body.style.overflow = 'hidden';
 }

for (let i = 0; i < design.length; i++) {
     design[i].addEventListener('click', showModalPopup);
 }

 function showConsultation() {
    questions.style.display = 'block';
    this.classList.add('splash');
    document.body.style.overflow = 'hidden';
 }

 for (let i = 0; i < consultation.length; i++) {
    consultation[i].addEventListener('click', showConsultation);
}

function showGift() {
    dialog.style.display = 'block';
    this.classList.add('splash');
    document.body.style.overflow = 'hidden';
 }

gift.addEventListener('click', showGift);

function showOrder() {
   container.style.display = 'block';
   this.classList.add('splash');
   document.body.style.overflow = 'hidden';
}

order.addEventListener('click', showOrder);


 function closeModalPopup() {
    questions.style.display = 'none';
    overlay.style.display = 'none';
    dialog.style.display = 'none';
    this.classList.remove('splash');
    document.body.style.overflow = '';
 }
 
 for (let i = 0; i < close.length; i++) {
    close[i].addEventListener('click', closeModalPopup);
 }*/

 
 //Form
   /*let messages = {
     loading: '<p>Отправляем данные.</p>',
     success: '<h4>Спасибо. Мы свяжемся с вами в ближайшее время</h4>',
     failure: '<h4>Ошибка отправки. Попробуйте позже.</h4>'
   };
   
   let form = document.querySelector('.form'),
   input = document.querySelectorAll('input'),
   statusMessage = document.createElement('div');
 
   statusMessage.classList.add('status'); 
   
   function sendForm(elem) {
   elem.addEventListener('submit', function (e) {
   e.preventDefault();
   elem.appendChild(statusMessage);
   
   let formData = new FormData(elem);
   
   function postData(data) {
   return new Promise(function (resolve, reject) {
   let request = new XMLHttpRequest();
   request.open('POST', 'smart.php');
   request.setRequestHeader('Content-Type', 'application/json; charset = utf-8');
   
   let obj = {};
   formData.forEach(function (value, key) {
   obj[key] = value;
   });
   let json = JSON.stringify(obj);
   
   request.onreadystatechange = function () {
   if (request.readyState < 4) {
   resolve();
   } else if (request.readyState === 4) {
   if (request.status == 200 && request.status < 300) {
   resolve();
   } else {
   reject();
   }
   }
   };
   request.send(json);
   });
   }
   
   function clearInput() {
   for (let i = 0; i < input.length; i++) {
   input[i].value = '';
   }
   }
   
   postData(formData)
   .then(() => statusMessage.innerHTML = message.loading)
   .then(() => statusMessage.innerHTML = message.succes)
   .catch(() => statusMessage.innerHTML = message.failure)
   .then(clearInput);
   });
   }
 
   sendForm(form);
*/
   

  //Validation
  /*let tels = document.querySelectorAll('input[name="phone"]');
  
  [].forEach.call(tels, (el =>{
    el.addEventListener('input', evt =>{
      if ( !el.oldValue ) {el.oldValue = '';} 
      
      if ( /^\+?[()\d \-]*$/.test(el.value) || el.value === '' ){
        el.oldValue = el.value;
      } else {
        el.value = el.oldValue;
      }
    });
  }));*/

  //Calc
  /*let sizeSelect     = document.getElementById('size'),
  materialSelect = document.getElementById('material'),
  optionsSelect  = document.getElementById('options'),
  calcForm       = sizeSelect.parentElement,
  calcPrice      = calcForm.getElementsByClassName('calc-price')[0],
  promoField     = calcForm.getElementsByClassName('promocode')[0];

let prices = {
sizePrice: [1000, 2000, 3000, 4000],
material: [3000, 1000, 2000],
options: [2000, 3000, 1000]
};

let totalSum = 0;

calcForm.dispatchEvent(new Event('reset'));

function calc() {
if (sizeSelect.selectedIndex > 0 && materialSelect.selectedIndex > 0){
  totalSum = prices.sizePrice[sizeSelect.selectedIndex-1] + prices.material[materialSelect.selectedIndex-1];

  if (optionsSelect.selectedIndex > 0){
    totalSum += prices.options[optionsSelect.selectedIndex-1];
  }

  if (promoField.value.trim().toUpperCase() === 'IWANTPOPART'){
    totalSum *= 0.7;
  }
  
  calcPrice.textContent = totalSum.toString();
} else {
  calcPrice.textContent = 'Для расчета нужно выбрать размер картины и материал картины';
}
}

calcForm.addEventListener('change', (evt)=>{
if (evt.target.tagName === 'SELECT'){
  calc();
}
});

promoField.addEventListener('input', ()=>{
calc();
});*/

//Burger
/*let menuBtn = document.getElementsByClassName('burger')[0],
      menu  = document.getElementsByClassName('burger-menu')[0];
  
  
  menuBtn.addEventListener('click', (e)=>{
    if (window.matchMedia("(max-width: 768px)").matches){
      menu.style.display = 'block';
      document.addEventListener('click', hideMenu);
    }
    e.stopPropagation();
    e.preventDefault();
    
    function hideMenu (){
      if (menu.style.display === 'block') {
        menu.style.display = '';
        document.removeEventListener('click', hideMenu);
      }
    }
  });
  
  let mediaQ = window.matchMedia("(min-width: 769px)");
  
  mediaQ.addListener(()=>{
    if (mediaQ.matches){
      menu.style.display = '';
    }
  });*/

  //Accordion
  /*let accordionBox = document.getElementById('often-questions'),
  titles = accordionBox.getElementsByClassName('accordion-heading'),
  blocks = accordionBox.getElementsByClassName('accordion-block');

function showBlock(n){
titles[n].style.color = '#c51abb';
titles[n].firstElementChild.style.borderBottom = 'none';
blocks[n].style.display = '';
}
function hideBlock(n){
titles[n].style.color = '';
titles[n].firstElementChild.style.borderBottom = '';
blocks[n].style.display = 'none';
}

[].forEach.call(blocks, (el, i)=>{
if (i === 0){
  showBlock(i);
} else {
  hideBlock(i);
}
});

accordionBox.addEventListener('click', evt =>{
if (evt.target.parentElement.classList.contains('accordion-heading')){
  [].forEach.call(titles, (el, i) =>{
    if (el === evt.target.parentElement){
      showBlock(i);
    } else {
      hideBlock(i);
    }
  });
}
});*/

//Portfolio
/*let portfolioSection   = document.getElementById('portfolio'),
      portfolioBlocks    = portfolioSection.getElementsByClassName('portfolio-block'),
      portfolioMenu      = portfolioSection.getElementsByClassName('portfolio-menu')[0],
      portfolioMenuItems = portfolioMenu.getElementsByTagName('LI');
  
 
  
  portfolioMenu.addEventListener('click', (evt) => {
    if (evt.target.tagName === 'LI'){
      [].forEach.call(portfolioMenuItems, (elem) =>{
        if (elem === evt.target){
          if (evt.target.classList.contains('active')){return;}
          
          if (elem.classList.value === 'grandmother' || elem.classList.value === 'granddad'){
            portfolioBlocks[0].parentElement.style.display = 'none';
            portfolioSection.getElementsByClassName('portfolio-no')[0].style.display = 'block';
          } else{
            portfolioBlocks[0].parentElement.style.display = '';
            portfolioSection.getElementsByClassName('portfolio-no')[0].style.display = '';
          }
          
          [].forEach.call(portfolioBlocks, (item)=>{
            
            if (item.classList.contains(elem.classList.value)){
              item.style.display = '';
            } else {
              item.style.display = 'none';
            }
          });
          
          elem.classList.add('active');
        } else {
          elem.classList.remove('active');
        }
      });
    }
  });*/

  //Slider
  /*let slideIndex = 1,
     slides = document.querySelectorAll('.feedback-slider-item'),
     prev = document.querySelector('.main-prev-btn'),
     next = document.querySelector('.main-next-btn');
   
     showSlides(slideIndex);

     function showSlides(n) {
if (n > slides.length) {
    slideIndex = 1;
}
if (n < 1) {
    slideIndex = slides.length;
}
        slides.forEach((item)=> item.style.display = 'none');

     slides[slideIndex - 1].style.display = 'block';
     }

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
     }*/
