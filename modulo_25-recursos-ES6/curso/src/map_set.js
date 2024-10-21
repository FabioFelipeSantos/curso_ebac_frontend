// -----------------------------------------------------------------------------------------------------------
// MAP
// -----------------------------------------------------------------------------------------------------------
let meuMap = new Map();

meuMap.set("nome", "fabio");
meuMap.set("stack", "html, css, js");
console.log(meuMap);

const name = meuMap.get("nome");
console.log(name);

console.log(meuMap.size);

// meuMap.clear();
console.log(meuMap.size);

for (let [chave, value] of [meuMap.keys(), meuMap.values()]) {
	console.log(chave);
	console.log(value);
}

for (let entrada of meuMap.entries()) {
	console.log(entrada);
}

for (let [key, value] of meuMap.entries()) {
	console.log(`${key}: ${value}`);
}

meuMap.delete("nome");
console.log(meuMap);

// -----------------------------------------------------------------------------------------------------------
// SET
// -----------------------------------------------------------------------------------------------------------
const cpfsSet = new Set();
cpfsSet.add("77729449005");
cpfsSet.add("88210577042");
cpfsSet.add("15566952097");
cpfsSet.add("57904147025");
console.log(cpfsSet);
console.log(cpfsSet.keys());
console.log(cpfsSet.values());

cpfsSet.forEach((value) => console.log(`O cpf é ${value}`));

const array = ["Fabio Felipe", "José Paulo", "Maria Isabel", "Luana Souza", "Luana Souza", "Fabio Felipe"];

const arrayAsSet = new Set([...array]);

const arrayWithoutRepetition = [...arrayAsSet];
console.log(array);
console.log(arrayAsSet);
console.log(arrayWithoutRepetition);
