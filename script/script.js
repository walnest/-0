let money = prompt("Ваш бюджет на месяц?", '10000'),
    time = prompt("Введите дату в формате YYYY -MM -DD", '2022.06.01');

let appData = {
	budget: 10000,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: "2022.06.01",
	savings: false
};

let a1 = prompt("Введите обязательнуюо статью расходов в этом месяце", '2100'),
    a2 = prompt("Во сколько обойдется?", '2100'),
	 a3 = prompt("Введите обязательную статью расходов в этом месяце", '1500'),
	 a4 = prompt("Во сколько обойдется?", '1500');

appData.expenses.a1 = a2;
appData.expenses.a3 = a4;

alert(appData.budget / 30)




