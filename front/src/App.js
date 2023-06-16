import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LobbyPage from "./pages/LobbyPage"
import CodeBlockPage from "./pages/CodeBlockPage"

function App() {
	const [title, setTitle] = useState("")
	const [code, setCode] = useState("")
	const [codeBlockList, setCodeBlockList] = useState([])

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
					<Route
						path="/"
						element={
							<LobbyPage
								codeBlockList={codeBlockList}
								setCodeBlockList={setCodeBlockList}
							/>
						}
					/>
					<Route path="/code-blocks/:id" element={<CodeBlockPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
