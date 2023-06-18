import { React, useEffect, useState } from "react"
import { Editor } from "@monaco-editor/react"
import io from "socket.io-client"
import Button from "@mui/material/Button"

const socket = io.connect("http://localhost:3001")

function Mentor({ title, code, roomId }) {
	const [changedCodeReceived, setChangedCodeReceived] = useState(code)

	useEffect(() => {
		socket.emit("identify", "mentor")
		socket.emit("join_room", { id: roomId, title: title })
		socket.on("receive_changed_code", (data) => {
			setChangedCodeReceived(data)
		})
	})

	const handleGoBack = () => {
		window.history.go(-1) // useNavigate
	}

	return (
		<div style={{ color: "white" }}>
			<div>
				<div>
					<h1>Mentor</h1>
				</div>

				<Button variant="contained" color="success" onClick={handleGoBack}>
					BACK
				</Button>
				<h1>{title}</h1>
				<Editor
					height="100vh"
					width="100%"
					theme="vs-dark"
					path="script.js"
					defaultValue={code}
					value={changedCodeReceived}
					options={{ readOnly: true }}
				/>
			</div>
		</div>
	)
}

export default Mentor
