import { Routes, Route } from "react-router-dom"

import Home from "./Pages/Home"
import Genres from "./Pages/Genres"
import Product from "./Pages/Product"
import Checkout from "./Pages/Checkout"

export default function MyRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/genres" element={<Genres />} />
			<Route path="/product/:id" element={<Product />} />
			<Route path="/checkout" element={<Checkout />} />
		</Routes>
	)
}
