 /*jshint esversion: 6 */
let money = prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "");
let article = prompt("Введите обязательную статью расходов в этом месяце", "");
let costs = prompt("Во сколько обойдется?");

let appData = {
    budget: {money}, 
    timeData: {time},
    expenses: {
        "article" : "costs"
    },
    optionalExpenses: {},
    income: [],
    savings: 'false',
};



