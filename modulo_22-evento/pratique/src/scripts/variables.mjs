function specifyingADate(date) {
	return [
		date.getUTCFullYear(),
		date.getUTCMonth(),
		date.getUTCDate(),
		date.getHours(),
		date.getMinutes(),
		date.getSeconds(),
	];
}

const monthsOfTheYear = [
	"Janeiro",
	"Fevereiro",
	"Março",
	"Abril",
	"Maio",
	"Junho",
	"Julho",
	"Agosto",
	"Setembro",
	"Outubro",
	"Novembro",
	"Dezembro",
];

export { specifyingADate, monthsOfTheYear };
