"use srict"

let mony = +prompt("Ваш бюджет на месяц", ""),
    time = prompt("Введите дату формата YYYY-MM-DD", "");

let appData = {
    budget: mony,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false
};

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в месяц", ""),
        b = prompt("Во сколько обойдется?", "");

    if ( (typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) 
        != null && a != '' && b != '' && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
    }
}

appData.monyPerDay = appData.budget / 30;

alert("Ежедневная статья расходов: " + appData.monyPerDay);

if (appData.monyPerDay < 3) {
    console.log("Минимальный уровень достатка");
} else if (appData.monyPerDay > 30 &&  appData.monyPerDay < 60) {
    console.log("Средний уровень достатка");
} else if (appData.monyPerDay > 60) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
}