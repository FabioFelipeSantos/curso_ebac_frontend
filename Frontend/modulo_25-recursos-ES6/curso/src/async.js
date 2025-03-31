//-----------------------------------------------
// Rodando uma função demorada sem Promises
//-----------------------------------------------
// function funcaoMuitoPesada() {
// 	let execucoes = 0;
// 	for (let i = 0; i < 1e9; i++) {
// 		execucoes++;
// 	}
// 	return execucoes;
// }

// console.log("Starting...");
// console.log(funcaoMuitoPesada());
// console.log("Finished!");

//-----------------------------------------------
// Rodando uma função demorada com Promises
//-----------------------------------------------
// const funcaoMuitoPesadaPromise = new Promise((resolve, reject) => {
// 	try {
// 		let execucoes = 0;
// 		for (let i = 0; i < 1e9; i++) {
// 			execucoes++;
// 		}
// 		resolve(execucoes);
// 	} catch (error) {
// 		reject("Ocorreu algum erro na iteração dos números!");
// 	}
// });

// console.log("Starting...");
// funcaoMuitoPesadaPromise.then((res) => console.log(res)).catch((error) => console.error(error));
// console.log("Finished!");

//-----------------------------------------------
// Rodando uma função demorada com Promises
//-----------------------------------------------
const funcaoMuitoPesadaPromise = new Promise((resolve, reject) => {
	try {
		let execucoes = 0;
		for (let i = 0; i < 1e9; i++) {
			execucoess++;
		}
		resolve(execucoes);
	} catch (error) {
		reject("Ocorreu algum erro na iteração dos números!");
	}
});

const promiseComParametros = (login, senha) => {
	return new Promise((res, rej) => {
		setTimeout(() => {
			res(`Logado com o usuário: ${login}`);
		}, 3000);
	});
};

async function execucaoPrincipal() {
	console.log("Starting...");

	// await funcaoMuitoPesadaPromise.then((res) => console.log(res)).catch((error) => console.error(error));
	promiseComParametros("fabio@fabio.com", "123456").then((res) => console.log(res));

	try {
		const resultado = await funcaoMuitoPesadaPromise;
		console.log(resultado);
	} catch (error) {
		console.log(error);
	}
	console.log("Finished!");
}

execucaoPrincipal();
