import Form from "./components/Formulario";
import Perfil from "./components/Perfil";

function App() {
	const today = new Date();

	let isMorning = true;

	return (
		<div>
			<Perfil
				name="Fabio"
				image="https://github.com/FabioFelipeSantos.png"
			/>
			<Form />
		</div>
	);
}

export default App;
