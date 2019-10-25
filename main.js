"use srict"

let mony, time;

function start() {
    mony = +prompt("Ваш бюджет на месяц", "");
    time = prompt("Введите дату формата YYYY-MM-DD", "");

    while(isNaN(mony) || mony == '' || mony == null ) {
        mony = +prompt("Ваш бюджет на месяц", "");
    }
}
start();

let appData = {
    budget: mony,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: true
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в месяц", ""),
            b = prompt("Во сколько обойдется?", "");
    
        if ( (typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) 
            != null && a != '' && b != '' && a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
        } else {
            i = i - 1;
        }
    }
}
chooseExpenses();

function chooseOptExpenses() {
    for (let i = 1; i < 3; i++) {
        let a = prompt("Статья необязательных расходов?", "");
        appData.optionalExpenses[i] = a;
    }
}

function detectDayBudget() {
    appData.monyPerDay = (appData.budget / 30).toFixed();
    alert("Дневной бюджет: " + appData.monyPerDay);
}
detectDayBudget();


function detectLevel() {
    if (appData.monyPerDay < 3) {
        console.log("Минимальный уровень достатка");
    } else if (appData.monyPerDay > 3 &&  appData.monyPerDay < 60) {
        console.log("Средний уровень достатка");
    } else if (appData.monyPerDay > 60) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произошла ошибка");
    }
}
detectLevel();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?", ""),
            percent = +prompt("Под каой процент?", "");

        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}
checkSavings();