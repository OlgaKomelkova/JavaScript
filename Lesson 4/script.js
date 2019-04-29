/*jshint esversion: 6 */

let money, time;

function start() {
    money = prompt("Ваш бюджет на месяц?", '');
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

    while (isNaN(money) || money == "" || money == null) {
        money = prompt("Ваш бюджет на месяц?", '');
    }
}

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
                b = prompt("Во сколько обойдется?", '');

            if ((typeof (a)) === 'string' && (typeof (a)) !== null && (typeof (b)) !== null
                && a !== '' && b !== '' && a.length < 50) {
                console.log("done");
                appData.expenses[a] = b;
            } else if ((typeof (a)) !== 'string' && (typeof (a)) === null && (typeof (b)) === null
                && a === '' && b === '' && a.length > 50);
            else {
                alert("Ошибка");
                i--;
            }
        }
    },
    detectLevel: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectDayBudget: function() {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?", ""),
                percent = +prompt("Под какой процент?", "");

            appData.monthIncome = save / 100 / 12 * percent;
            alert("Доход в месяц с Вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for (let i = 0; i < 3; i++) {
            let a = prompt("Статья необязательных расходов?", "");
            if ((typeof (a)) === 'string' && (typeof (a)) !== null
                && a !== '' && a.length < 50) {
                console.log("done");
                appData.optionalExpenses[i + 1] = a;
                console.log(appData.optionalExpenses);
            } else if ((typeof (a)) !== 'string' && (typeof (a)) === null
                && a === '' && a.length > 50);
            else {
                alert("Ошибка");
                i--;
            }
        }
    },
    chooseIncome: function() {
        for (let i = 0; i < 1; i++) {
            let items = prompt('Что принесет дополнительный доход (Перечисли через запятую)', '');

            if ((typeof (items)) === 'string' && items != '' && (typeof (items)) != null) {
                appData.income = items.split(', ');
                appData.income.push(prompt('Что может что-то еще?'));
                appData.income.sort();
                appData.income.forEach(function (item, i, income) {
                    let n = i + 1;
                    console.log(n + ' - Способ доп. заработка: ' + item);
                });
            } else {
                i--;
            }
        }
    }
};

console.log('В итоге наша программа включает в себя данные:');
for (let i in appData) {
    console.log(i, appData[i]);
}

