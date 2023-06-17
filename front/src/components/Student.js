import React, { useState, useRef } from "react"
import Editor from "@monaco-editor/react"
import io from "socket.io-client"

const socket = io.connect("http://localhost:3001")

function Student({ title, code }) {
	const [changedCode, setChangedCode] = useState(code)

	const handleOnChange = (value) => {
		setChangedCode(value)
		socket.emit("update_code", { changedCode: value })
	}

	return (
		<div>
			Student
			<div>
				<div>
					<button onClick={() => window.history.go(-1)}>back</button>
				</div>
				<h1>{title}</h1>
				<Editor
					height="100vh"
					width="100%"
					theme="vc"
					defaultLanguage="javascript"
					defaultValue={code}
					onChange={handleOnChange}
				/>
			</div>
		</div>
	)
}

export default Student
