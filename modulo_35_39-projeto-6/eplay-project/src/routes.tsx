import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Genres from "./Pages/Genres";

export default function MyRoutes() {
	return (
		<Routes>
			<Route
				path="/"
				element={<Home />}
			/>
			<Route
				path="/genres"
				element={<Genres />}
			/>
		</Routes>
	);
}
