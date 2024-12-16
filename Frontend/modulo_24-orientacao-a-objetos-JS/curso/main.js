// const _carroDoJoao = {
// 	modelo: "Fiesta",
// 	fabricante: "Ford",
// 	anoModelo: 2020,
// 	anoFabricacao: 2019,

// 	acelerar: function () {
// 		console.log("acelerando");
// 	},
// };

// const _carroDoMaria = {
// 	modelo: "Ka",
// 	fabricante: "Ford",
// 	anoModelo: 2021,
// 	anoFabricacao: 2020,

// 	acelerar: function () {
// 		console.log("acelerando");
// 	},
// };

function Carro(modelo, fabricante, anoModelo, anoFabricacao) {
	this.modelo = modelo;
	this.fabricante = fabricante;
	this.anoModelo = anoModelo;
	this.anoFabricacao = anoFabricacao;
	this.acelerar = () => {
		console.log("acelerando");
	};
}

const carroJoao = new Carro("Fiesta", "Ford", 2020, 2019);
const carroMaria = new Carro("Ka", "Ford", 2021, 2020);

const name = "Fábio";
const age = 36;
const skills = ["CSS", "HTML", "JS"];

const person = {
	name: name,
	age: age,
	skills: skills,
};
console.log(carroJoao);
console.log(carroMaria);

console.log(typeof name);
console.log(typeof age);
console.log(typeof skills);
console.log(typeof person);
console.log(typeof carroJoao);
console.log(typeof carroMaria);

console.log(carroJoao instanceof Carro);
console.log(carroJoao instanceof Array);
console.log(skills instanceof Array);
