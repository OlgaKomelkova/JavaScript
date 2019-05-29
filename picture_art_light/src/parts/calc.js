/*jshint esversion: 6 */ 

function calc() {
    let sizeSelect     = document.getElementById('size'),
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
  }); 
}

module.exports = calc;
