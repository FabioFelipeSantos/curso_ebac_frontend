import { useState, useEffect } from "react";

export default function Form() {
	const [test1, setTest1] = useState(0);
	const [test2, setTest2] = useState(0);
	const [test3, setTest3] = useState(0);
	const [name, setName] = useState("");

	const countries = [
		"South Korea",
		"Germany",
		"United States",
		"Canada",
		"Norway",
		"Finland",
		"New Zealand",
	];

	useEffect(() => {
		console.log("The state has changed!");

		return () => {
			console.log("O componente foi desmontado");
		};
	}, []);

	function renderResult() {
		const sum = test1 + test2 + test3;
		const average = sum / 3;

		if (average >= 7) {
			return (
				<h3>
					Hi {name}! You&apos;ve been approved! Your final grade is: {average.toFixed(2)}.
				</h3>
			);
		} else {
			return (
				<h3>
					Hi {name}! You haven&apos;t been approved! Your final grade is: {average.toFixed(2)}.
				</h3>
			);
		}
	}

	return (
		<>
			<h1>Some countries: </h1>
			{countries.map((country) => (
				<h3 key={country}>{country}</h3>
			))}
			<form>
				<input
					onChange={(event) => setName(event.target.value)}
					type="text"
					name="name"
					id="name"
					placeholder="Your name"
				/>
				<input
					onChange={(event) => setTest1(event.target.valueAsNumber)}
					type="number"
					name="test1"
					id="test1"
					placeholder="Nota Matéria A"
				/>
				<input
					onChange={({ target }) => setTest2(target.valueAsNumber)}
					type="number"
					name="test2"
					id="test2"
					placeholder="Nota Matéria B"
				/>
				<input
					onChange={(event) => setTest3(event.target.valueAsNumber)}
					type="number"
					name="test3"
					id="test3"
					placeholder="Nota Matéria C"
				/>
				{!name && <h2>Enter your name and your grades!</h2>}
				{name && renderResult()}
			</form>
		</>
	);
}
