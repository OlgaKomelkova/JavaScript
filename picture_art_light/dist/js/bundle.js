/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*jshint esversion: 6 */
document.addEventListener('DOMContentLoaded', function () {
  "use strict";

  var accordion = __webpack_require__(/*! ./parts/accordion.js */ "./src/parts/accordion.js"),
      burger = __webpack_require__(/*! ./parts/burger.js */ "./src/parts/burger.js"),
      calc = __webpack_require__(/*! ./parts/calc.js */ "./src/parts/calc.js"),
      form = __webpack_require__(/*! ./parts/form.js */ "./src/parts/form.js"),
      modal = __webpack_require__(/*! ./parts/modal.js */ "./src/parts/modal.js"),
      portfolio = __webpack_require__(/*! ./parts/portfolio.js */ "./src/parts/portfolio.js"),
      slider = __webpack_require__(/*! ./parts/slider.js */ "./src/parts/slider.js");

  accordion();
  burger();
  calc();
  form();
  modal();
  slider();
  portfolio();
}); //Modal 

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

/***/ }),

/***/ "./src/parts/accordion.js":
/*!********************************!*\
  !*** ./src/parts/accordion.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*jshint esversion: 6 */
function accordion() {
  var accordionBox = document.getElementById('often-questions'),
      titles = accordionBox.getElementsByClassName('accordion-heading'),
      blocks = accordionBox.getElementsByClassName('accordion-block');

  function showBlock(n) {
    titles[n].style.color = '#c51abb';
    titles[n].firstElementChild.style.borderBottom = 'none';
    blocks[n].style.display = '';
  }

  function hideBlock(n) {
    titles[n].style.color = '';
    titles[n].firstElementChild.style.borderBottom = '';
    blocks[n].style.display = 'none';
  }

  [].forEach.call(blocks, function (el, i) {
    if (i === 0) {
      showBlock(i);
    } else {
      hideBlock(i);
    }
  });
  accordionBox.addEventListener('click', function (evt) {
    if (evt.target.parentElement.classList.contains('accordion-heading')) {
      [].forEach.call(titles, function (el, i) {
        if (el === evt.target.parentElement) {
          showBlock(i);
        } else {
          hideBlock(i);
        }
      });
    }
  });
}

module.exports = accordion;

/***/ }),

/***/ "./src/parts/burger.js":
/*!*****************************!*\
  !*** ./src/parts/burger.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*jshint esversion: 6 */
function burger() {
  var menuBtn = document.getElementsByClassName('burger')[0],
      menu = document.getElementsByClassName('burger-menu')[0];
  menuBtn.addEventListener('click', function (e) {
    if (window.matchMedia("(max-width: 768px)").matches) {
      menu.style.display = 'block';
      document.addEventListener('click', hideMenu);
    }

    e.stopPropagation();
    e.preventDefault();

    function hideMenu() {
      if (menu.style.display === 'block') {
        menu.style.display = '';
        document.removeEventListener('click', hideMenu);
      }
    }
  });
  var mediaQ = window.matchMedia("(min-width: 769px)");
  mediaQ.addListener(function () {
    if (mediaQ.matches) {
      menu.style.display = '';
    }
  });
}

module.exports = burger;

/***/ }),

/***/ "./src/parts/calc.js":
/*!***************************!*\
  !*** ./src/parts/calc.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*jshint esversion: 6 */
function calc() {
  var sizeSelect = document.getElementById('size'),
      materialSelect = document.getElementById('material'),
      optionsSelect = document.getElementById('options'),
      calcForm = sizeSelect.parentElement,
      calcPrice = calcForm.getElementsByClassName('calc-price')[0],
      promoField = calcForm.getElementsByClassName('promocode')[0];
  var prices = {
    sizePrice: [1000, 2000, 3000, 4000],
    material: [3000, 1000, 2000],
    options: [2000, 3000, 1000]
  };
  var totalSum = 0;
  calcForm.dispatchEvent(new Event('reset'));

  function calc() {
    if (sizeSelect.selectedIndex > 0 && materialSelect.selectedIndex > 0) {
      totalSum = prices.sizePrice[sizeSelect.selectedIndex - 1] + prices.material[materialSelect.selectedIndex - 1];

      if (optionsSelect.selectedIndex > 0) {
        totalSum += prices.options[optionsSelect.selectedIndex - 1];
      }

      if (promoField.value.trim().toUpperCase() === 'IWANTPOPART') {
        totalSum *= 0.7;
      }

      calcPrice.textContent = totalSum.toString();
    } else {
      calcPrice.textContent = 'Для расчета нужно выбрать размер картины и материал картины';
    }
  }

  calcForm.addEventListener('change', function (evt) {
    if (evt.target.tagName === 'SELECT') {
      calc();
    }
  });
  promoField.addEventListener('input', function () {
    calc();
  });
}

module.exports = calc;

/***/ }),

/***/ "./src/parts/form.js":
/*!***************************!*\
  !*** ./src/parts/form.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*jshint esversion: 6 */
function form() {
  var messages = {
    loading: '<p>Отправляем данные.</p>',
    success: '<h4>Спасибо. Мы свяжемся с вами в ближайшее время</h4>',
    failure: '<h4>Ошибка отправки. Попробуйте позже.</h4>'
  };
  var form = document.querySelector('.form'),
      input = document.querySelectorAll('input'),
      statusMessage = document.createElement('div');
  statusMessage.classList.add('status');

  function sendForm(elem) {
    elem.addEventListener('submit', function (e) {
      e.preventDefault();
      elem.appendChild(statusMessage);
      var formData = new FormData(elem);

      function postData(data) {
        return new Promise(function (resolve, reject) {
          var request = new XMLHttpRequest();
          request.open('POST', 'smart.php');
          request.setRequestHeader('Content-Type', 'application/json; charset = utf-8');
          var obj = {};
          formData.forEach(function (value, key) {
            obj[key] = value;
          });
          var json = JSON.stringify(obj);

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
        for (var i = 0; i < input.length; i++) {
          input[i].value = '';
        }
      }

      postData(formData).then(function () {
        return statusMessage.innerHTML = message.loading;
      }).then(function () {
        return statusMessage.innerHTML = message.succes;
      }).catch(function () {
        return statusMessage.innerHTML = message.failure;
      }).then(clearInput);
    });
  }

  sendForm(form);
  var tels = document.querySelectorAll('input[name="phone"]');
  [].forEach.call(tels, function (el) {
    el.addEventListener('input', function (evt) {
      if (!el.oldValue) {
        el.oldValue = '';
      }

      if (/^\+?[()\d \-]*$/.test(el.value) || el.value === '') {
        el.oldValue = el.value;
      } else {
        el.value = el.oldValue;
      }
    });
  });
}

module.exports = form;

/***/ }),

/***/ "./src/parts/modal.js":
/*!****************************!*\
  !*** ./src/parts/modal.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*jshint esversion: 6 */
function modal() {
  var design = document.body.querySelectorAll('.button-design'),
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

  for (var i = 0; i < design.length; i++) {
    design[i].addEventListener('click', showModalPopup);
  }

  function showConsultation() {
    questions.style.display = 'block';
    this.classList.add('splash');
    document.body.style.overflow = 'hidden';
  }

  for (var _i = 0; _i < consultation.length; _i++) {
    consultation[_i].addEventListener('click', showConsultation);
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

  for (var _i2 = 0; _i2 < close.length; _i2++) {
    close[_i2].addEventListener('click', closeModalPopup);
  }
}

module.exports = modal;

/***/ }),

/***/ "./src/parts/portfolio.js":
/*!********************************!*\
  !*** ./src/parts/portfolio.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*jshint esversion: 6 */
function portfolio() {
  var portfolioSection = document.getElementById('portfolio'),
      portfolioBlocks = portfolioSection.getElementsByClassName('portfolio-block'),
      portfolioMenu = portfolioSection.getElementsByClassName('portfolio-menu')[0],
      portfolioMenuItems = portfolioMenu.getElementsByTagName('LI');
  portfolioMenu.addEventListener('click', function (evt) {
    if (evt.target.tagName === 'LI') {
      [].forEach.call(portfolioMenuItems, function (elem) {
        if (elem === evt.target) {
          if (evt.target.classList.contains('active')) {
            return;
          }

          if (elem.classList.value === 'grandmother' || elem.classList.value === 'granddad') {
            portfolioBlocks[0].parentElement.style.display = 'none';
            portfolioSection.getElementsByClassName('portfolio-no')[0].style.display = 'block';
          } else {
            portfolioBlocks[0].parentElement.style.display = '';
            portfolioSection.getElementsByClassName('portfolio-no')[0].style.display = '';
          }

          [].forEach.call(portfolioBlocks, function (item) {
            if (item.classList.contains(elem.classList.value)) {
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
  });
}

module.exports = portfolio;

/***/ }),

/***/ "./src/parts/slider.js":
/*!*****************************!*\
  !*** ./src/parts/slider.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*jshint esversion: 6 */
function slider() {
  var slideIndex = 1,
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

  prev.addEventListener('click', function () {
    plusSlides(-1);
  });
  next.addEventListener('click', function () {
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

    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 4000);
  }
}

module.exports = slider;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map