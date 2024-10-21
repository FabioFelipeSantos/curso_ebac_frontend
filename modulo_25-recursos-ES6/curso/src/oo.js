class Pokemon {
	#hp = 100;
	constructor(nome, tipo) {
		this.nome = nome;
		this.tipo = tipo;
	}

	atacar(nomeDoAtaque) {
		console.log(`${this.nome} atacou com ${nomeDoAtaque}`);
	}

	recebeuAtaque() {
		this.#hp -= 10;
	}

	exibeHP() {
		console.log(this.#hp);
	}
}

class Pikachu extends Pokemon {
	constructor() {
		super("Pikachu", "Elétrico");
	}

	atacar() {
		console.log(`${this.nome} atacou com choque do trovão.`);
	}
}

const pikachuDoAsh = new Pikachu();
console.log(pikachuDoAsh);
pikachuDoAsh.recebeuAtaque();
pikachuDoAsh.hp = 9999;
console.log(pikachuDoAsh.hp);
console.log(pikachuDoAsh);
pikachuDoAsh.atacar();
pikachuDoAsh.exibeHP();
