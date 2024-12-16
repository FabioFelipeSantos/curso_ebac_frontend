// -----------------------------------------------------------------------------------------------------------
// Without ASYNC
// -----------------------------------------------------------------------------------------------------------

// console.log("Starting all tasks!");
// setTimeout(() => {
// 	console.log("Task 1");
// }, 2500);

// setTimeout(() => {
// 	console.log("Task 2");
// }, 1050);

// setTimeout(() => {
// 	console.log("Task 3");
// }, 1800);

// setTimeout(() => {
// 	console.log("Task 4");
// }, 900);

// console.log("I've finished all tasks!");
// console.log("-".repeat(100));
// console.log("\n");

// -----------------------------------------------------------------------------------------------------------
// With ASYNC
// -----------------------------------------------------------------------------------------------------------
function task1() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve("Task 1");
		}, 2500);
	});
}

function task2() {
	return new Promise((res) => {
		setTimeout(() => {
			res("Task 2");
		}, 1050);
	});
}

function task3() {
	return new Promise((res) => {
		setTimeout(() => {
			res("Task 3");
		}, 1800);
	});
}

function task4() {
	return new Promise((res) => {
		setTimeout(() => {
			res("Task 4");
		}, 900);
	});
}

async function doTasks() {
	console.log("Starting all tasks!");
	const a = await task1();
	console.log(a);
	const b = await task2();
	console.log(b);
	const c = await task3();
	console.log(c);
	const d = await task4();
	console.log(d);
	console.log("I've finished all tasks!");
}

doTasks();
