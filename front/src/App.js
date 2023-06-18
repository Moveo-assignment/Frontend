import { BrowserRouter, Routes, Route } from "react-router-dom"
import LobbyPage from "./pages/LobbyPage"
import CodeBlockPage from "./pages/CodeBlockPage"

function App() {
	return (
		<div
			style={{
				position: "fixed",
				top: 0,
				left: 0,
				width: "100%",
				height: "100%",
				backgroundColor: "#333333",
			}}
		>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<LobbyPage />} />
					<Route path="/code-blocks/:id" element={<CodeBlockPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
