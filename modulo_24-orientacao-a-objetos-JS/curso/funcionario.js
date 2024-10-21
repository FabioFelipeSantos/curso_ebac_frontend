function Pessoa(nome) {
	this.nome = nome;
	this.dizOi = function () {
		console.log(this.nome + " está lhe saudando com 'Olá!'");
	};
}

function Funcionario(nome, cargo, salario) {
	this.nome = nome;
	this.cargo = cargo;
	this.salario = salario;
}

const pessoa1 = new Pessoa("Maria");
const funcionario1 = new Funcionario("Maria", "dev", 5000);
pessoa1.dizOi();

console.log(pessoa1);
console.log(funcionario1);
