import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import MyRoutes from "./routes";
import Footer from "./components/Footer";

function App() {
	return (
		<BrowserRouter>
			<div className="container">
				<Header />
			</div>
			<MyRoutes />
			<Footer />
		</BrowserRouter>
	);
}

export default App;
