import { useState } from "react";

function App() {
	const [tarefas, setTarefas] = useState([]);
	const [tarefaTemp, setTarefaTemp] = useState("");

	function cadastrarTarefa() {
		setTarefas([...tarefas, tarefaTemp]);
		setTarefaTemp("");
	}

	return (
		<div className="App">
			<input
				type="text"
				value={tarefaTemp}
				data-testid="campo-tarefa"
				onChange={(e) => setTarefaTemp(e.target.value)}
			/>
			<button
				data-testid="btn-cadastrar"
				onClick={cadastrarTarefa}>
				Cadastrar
			</button>
			<ul>
				{tarefas.map((tarefa) => (
					<li key={tarefa}>{tarefa}</li>
				))}
			</ul>
		</div>
	);
}

export default App;
