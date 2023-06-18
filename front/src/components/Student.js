import React, { useEffect } from "react"
import Editor from "@monaco-editor/react"
import io from "socket.io-client"
import Button from "@mui/material/Button"

const socket = io.connect("http://localhost:3001")

function Student({ title, code, roomId }) {
	useEffect(() => {
		return () => {
			socket.emit("join_room", { id: roomId, title: title })
		}
	})

	const handleOnChange = (value) => {
		socket.emit("update_code", { code: value, roomId: roomId })
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
