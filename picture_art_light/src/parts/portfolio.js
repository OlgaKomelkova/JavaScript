/*jshint esversion: 6 */ 

function portfolio() {
    let portfolioSection   = document.getElementById('portfolio'),
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
});
}

module.exports = portfolio;