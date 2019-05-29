/*jshint esversion: 6 */ 

function accordion() {
    let accordionBox = document.getElementById('often-questions'),
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
  });
  
}

module.exports = accordion;