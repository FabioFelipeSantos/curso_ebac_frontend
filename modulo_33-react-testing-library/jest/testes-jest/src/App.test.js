import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("Testes para o componente principal", () => {
	test("Deve renderizar corretamente", () => {
		render(<App />);
		expect(screen.getByText("Cadastrar")).toBeInTheDocument();
	});
	test("Deve adicionar 'estudar react' na lista", () => {
		render(<App />);
		fireEvent.change(screen.getByTestId("campo-tarefa"), {
			target: {
				value: "estudar react",
			},
		});
		fireEvent.click(screen.getByTestId("btn-cadastrar"));
		expect(screen.getByText("estudar react")).toBeInTheDocument();
	});
});
