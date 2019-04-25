 /*jshint esversion: 6 */
 let money = prompt("Ваш бюджет на месяц?", "");
 let time = prompt("Введите дату в формате YYYY-MM-DD", "");
 let article = prompt("Введите обязательную статью расходов в этом месяце", "");
 let costs = prompt("Во сколько обойдется?");
 let article2 = prompt("Введите обязательную статью расходов в этом месяце", "");
 let costs2 = prompt("Во сколько обойдется?");
   
 let appData = {
     budget: {}, 
     timeData: {},
     expenses1: {},
     expenses2: {},
     optionalExpenses: {},
     income: [],
     savings: 'false',
 };
 
 appData.budget = money;
 appData.timeData = time;
 appData.expenses1[article] = costs;
 appData.expenses2[article2] = costs2;
 
 console.log(appData);
 
 let dayBudget = (money - costs - costs2) / 30;
 alert(dayBudget);