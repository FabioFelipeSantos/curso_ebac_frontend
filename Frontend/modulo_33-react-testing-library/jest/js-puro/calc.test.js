const calc = require("./calc");

describe("Testes para a calculadora", () => {
	test("somar 2 e 2 são 4", () => {
		const result = calc.sum(2, 2);

		expect(result).toBe(4);
	});

	test("15*3 = 45", function () {
		const result = calc.multiply(15, 3);

		expect(result).toBe(45);
	});
});
