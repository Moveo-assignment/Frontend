import { React, useEffect, useState } from "react"
import { Editor, EditorDidMount } from "@monaco-editor/react"
import io from "socket.io-client"
import { setCurrentState } from "../axios"

const socket = io.connect("http://localhost:3001")

function Mentor({ title, code }) {
	const [changedCodeReceived, setChangedCodeReceived] = useState("")
	const [show, setShow] = useState(true)

	useEffect(() => {
		socket.on("receive_changed_code", (data) => {
			setChangedCodeReceived(data.changedCode)
			setShow(false)
		})
	}, [socket])

	const handleGoBack = () => {
		setCurrentState(true).then(() => {})
		window.history.go(-1)
	}

	return (
		<div>
			Mentor
			<div>
				<div>
					<button onClick={() => handleGoBack()}>back</button>
				</div>
				<h1>{title}</h1>
				<Editor
					height="100vh"
					width="100%"
					theme="vc"
					path="script.js"
					defaultValue={code}
					value={show ? code : changedCodeReceived}
					options={{ readOnly: true }}
				/>
			</div>
		</div>
	)
}

export default Mentor
