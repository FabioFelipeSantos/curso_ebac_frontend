const greeting = require("./greeting");

describe("Testing our greeting function", () => {
	test("It should return Hy, Fábio", () => {
		const result = greeting.sayHello("Fábio");
		expect(result).toBe("Hi, Fábio");
	});
});
