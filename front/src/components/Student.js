import React, { useEffect, useState } from "react"
import Editor from "@monaco-editor/react"
import io from "socket.io-client"
import Button from "@mui/material/Button"
import { useNavigate } from "react-router-dom"

const socket = io.connect("http://localhost:3001")

function Student({ title, code, roomId, solution }) {
	const navigate = useNavigate()

	const [hashedSolution, setHashedSolution] = useState("")
	const [codeCheck, setCodeCheck] = useState(code)

	function encrypt(plaintext, key) {
		let ciphertext = ""
		for (let i = 0; i < plaintext.length; i++) {
			const charCode = plaintext.charCodeAt(i) ^ key.charCodeAt(i % key.length)
			ciphertext += String.fromCharCode(charCode)
		}
		return ciphertext
	}

	function compareEncryptedStrings(encryptedString1, encryptedString2) {
		if (encryptedString1.length !== encryptedString2.length) {
			return false
		}

		for (let i = 0; i < encryptedString1.length; i++) {
			if (encryptedString1.charCodeAt(i) !== encryptedString2.charCodeAt(i)) {
				return false
			}
		}

		return true
	}

	useEffect(() => {
		socket.emit("join_room", { id: roomId, title: title })
	}, [roomId, title])

	const key = "DSFN932840GFJF-120934F"

	useEffect(() => {
		setHashedSolution(encrypt(solution, key))
	}, [solution])

	useEffect(() => {
		const encryptedCode = encrypt(codeCheck, key)
		const areEqual = compareEncryptedStrings(encryptedCode, hashedSolution)
		if (areEqual) {
			navigate("/smily")
		}
	}, [codeCheck, hashedSolution, navigate])

	const handleOnChange = (value) => {
		setCodeCheck(value)
		socket.emit("update_code", { code: value, roomId: roomId })
	}

	return (
		<div style={{ color: "white" }}>
			<div>
				<div>
					<h1>Student</h1>
				</div>

				<Button variant="contained" color="success" onClick={() => navigate(-1)}>
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
