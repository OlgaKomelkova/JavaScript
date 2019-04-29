 /*jshint esversion: 6 */
 let money = prompt("Ваш бюджет на месяц?", '');
 let time = prompt("Введите дату в формате YYYY-MM-DD", '');

 let appData = {
     budget: money, 
     timeData: time,
     expenses: {},
     optionalExpenses: {},
     income: [],
     savings: 'false',
 };
 
for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется?", '');

    if ( (typeof(a))=== 'string' && (typeof(a)) !== null && (typeof (b)) !== null
        && a !== '' && b !== '' && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
    } 
    else {
        alert("Ошибка");   
        i--;
    } 
}

    /*var i = 0;

do {
  let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
      b = prompt("Во сколько обойдется?", '');
      appData.expenses[a] = b;
      i++;
      if ( (typeof(a))=== 'string' && (typeof(a)) !== null && (typeof (b)) !== null
        && a !== '' && b !== '' && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
    }  
    else {
        alert("Ошибка");   
        i--;
    } 
}

    while (i < 2);*/	

/*var i = 0;

while (i<2) {
	let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
      b = prompt("Во сколько обойдется?", '');
      appData.expenses[a] = b;
      i++;
      if ( (typeof(a))=== 'string' && (typeof(a)) !== null && (typeof (b)) !== null
        && a !== '' && b !== '' && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
    } 
    else {
        alert("Ошибка");   
        i--;
    } 
}
*/

appData.moneyPerDay = appData.budget/30;
alert(appData.moneyPerDay);