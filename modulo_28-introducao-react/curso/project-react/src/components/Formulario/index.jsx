export default function Form() {
	return (
		<form>
			<input
				type="number"
				name="test1"
				id="test1"
				placeholder="Nota Matéria A"
			/>
			<input
				type="number"
				name="test2"
				id="test2"
				placeholder="Nota Matéria B"
			/>
			<input
				type="number"
				name="test3"
				id="test3"
				placeholder="Nota Matéria C"
			/>
			<p>O aluno foi aprovado!</p>
		</form>
	);
}
