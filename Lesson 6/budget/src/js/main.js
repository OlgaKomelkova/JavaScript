/*jshint esversion: 6 */

let start = document.getElementById('start'),
    budgetValue = document.querySelector('.budget-value'),
    dayBudgetValue = document.querySelector('.daybudget-value'),
    levelValue = document.querySelector('.level-value'),
    expensesValue = document.querySelector('.expenses-value'), 
    incomeValue = document.querySelector('.income-value'),
    monthSavingsValue = document.querySelector('.monthsavings-value'),
    yearSavingsValue = document.querySelector('.yearsavings-value'),
    expensesItem = document.querySelectorAll('.expenses-item'),
    buttonExpensesItem = document.querySelector('.expenses-item-btn'),
    buttonOptionalExpenses = document.querySelector('.optionalexpenses-btn'),
    buttonCount = document.querySelector('.count-budget-btn'),
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    chooseIncome = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('.checksavings'),
    sumValue = document.querySelector('#sum'),
    percentValue = document.querySelector('#percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector(".day-value"),
    optionalExpensesValue = document.querySelector(".optionalexpenses-value");
    

    let money, time;

    start.addEventListener('click', function() {
        time = prompt("Введите дату в формате YYYY-MM-DD", "");
        money = +prompt("Ваш бюджет на месяц?", "");
      
        while (isNaN(money) || money == "" || money == null) {
            money = prompt("Ваш бюджет?", "");
        }
        appData.budget = money;
        appData.timeData = time;
        budgetValue.textContent = money.toFixed();
        yearValue.value = new Date(Date.parse(time)).getFullYear();
        monthValue.value = new Date(Date.parse(time)).getMonth()+1;
        dayValue.value = new Date(Date.parse(time)).getDate();
    });

    buttonExpensesItem.disabled = true;

    expensesItem.forEach(function (element) {
    element.addEventListener('change', function () {
        if (element.value == '') {
            buttonExpensesItem.disabled = true;
            } else {
                buttonExpensesItem.disabled = false;
            }
        });
    });

    buttonExpensesItem.addEventListener('click', function() {
        let sum = 0;

        for (let i = 0; i < expensesItem.length; i++) {
            let a = expensesItem[i].value,
                b = expensesItem[++i].value;

            if ((typeof (a)) === 'string' && (typeof (a)) !== null && (typeof (b)) !== null
                && a !== '' && b !== '' && a.length < 50) {
                console.log("done");
                appData.expenses[a] = b;
                sum += +b;
                } else {
                i=i-1;
            }
        }
        expensesValue.textContent = sum;
        appData.expensesSum = sum;
    });

    buttonOptionalExpenses.addEventListener('click', function() {
        for (let i = 0; i < optionalExpensesItem.length; i++) {
            let opt = optionalExpensesItem[i].value; 
                appData.optionalExpenses[i] = opt;
                optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
        }
    });

    buttonCount.addEventListener('click', function() {
        console.log(appData.expenses);

        if (appData.budget != undefined) {
            appData.moneyPerDay = ((appData.budget - appData.expensesSum) / 30).toFixed();
            dayBudgetValue.textContent = appData.moneyPerDay;
    
            if (appData.moneyPerDay < 100) {
                levelValue.textContent = "Минимальный уровень достатка";
            } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
                levelValue.textContent = "Средний уровень достатка";
            } else if (appData.moneyPerDay > 2000) {
                levelValue.textContent = "Высокий уровень достатка";
            } else {
                levelValue.textContent = "Произошла ошибка";
            }
        } else {
            dayBudgetValue.textContent = 'Произошла ошибка';
        }
    });

    chooseIncome.addEventListener('input', function() {
        let items = chooseIncome.value;
        appData.income = items.split(',');
        incomeValue.textContent = appData.income; 
    });

    checkSavings.addEventListener('click', function() {
        if (appData.savings == true) {
            appData.savings = false;
        } else {
            appData.savings = true;
        }
    }); 

    sumValue.addEventListener('input', function() {
        if (appData.savings == true) {
            let sum = +sumValue.value,
                percent = +percentValue.value;

            appData.monthIncome = sum/100/12*percent;
            appData.yearIncome = sum/100*percent;

            monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
            yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
        }
    });

    percentValue.addEventListener('input', function() {
        if (appData.savings == true) {
            let sum = +sumValue.value,
                percent = +percentValue.value;

            appData.monthIncome = sum/100/12*percent;
            appData.yearIncome = sum/100*percent;

            monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
            yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
        }   
    });

    let appData = {
        budget: money,
        timeData: time,
        expenses: {},
        income: [],
        optionalExpenses: {},
        savings: false
    };

