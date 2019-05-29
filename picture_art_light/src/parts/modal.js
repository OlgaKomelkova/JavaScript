/*jshint esversion: 6 */ 

function modal() {
    let design = document.body.querySelectorAll('.button-design'),
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
}
}

module.exports = modal;