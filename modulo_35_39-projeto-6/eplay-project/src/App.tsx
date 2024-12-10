import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"

import Header from "./components/Header"
import MyRoutes from "./routes"
import Footer from "./components/Footer"
import { store } from "./store"
import Cart from "./components/Cart"

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<div className="container">
					<Header />
				</div>
				<MyRoutes />
				<Footer />
				<Cart />
			</BrowserRouter>
		</Provider>
	)
}

export default App
