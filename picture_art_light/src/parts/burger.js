/*jshint esversion: 6 */ 

function burger() {
    let menuBtn = document.getElementsByClassName('burger')[0],
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
  });
}

module.exports = burger;