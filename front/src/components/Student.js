import React, { useState, useRef } from "react"
import Editor from "@monaco-editor/react"
import io from "socket.io-client"
import Button from "@mui/material/Button"

const socket = io.connect("http://localhost:3001")

function Student({ title, code }) {
	const [changedCode, setChangedCode] = useState(code)

	const handleOnChange = (value) => {
		setChangedCode(value)
		socket.emit("update_code", { changedCode: value })
	}

	return (
		<div style={{ color: "white" }}>
			<div>
				<div>
					<h1>Student</h1>
				</div>

				<Button
					variant="contained"
					color="success"
					onClick={() => window.history.go(-1)}
				>
					BACK
				</Button>
				<h1>{title}</h1>
				<Editor
					height="100vh"
					width="100%"
					theme="vs-dark"
					defaultLanguage="javascript"
					defaultValue={code}
					onChange={handleOnChange}
				/>
			</div>
		</div>
	)
}

export default Student
