import React, { useEffect, useState } from "react"
import { getCodeBlockById, getCurrentState, setCurrentState } from "../axios"
import Mentor from "../components/Mentor"
import Student from "../components/Student"

function CodeBlockPage() {
	const url = window.location.href
	const id = url.split("/")[4]

	const [codeBlock, setCodeBlock] = useState(null)
	const [state, setState] = useState(null)

	useEffect(() => {
		getCodeBlockById(id)
			.then((result) => {
				setCodeBlock(result)
				console.log("hey roey", result)
			})
			.catch((error) => {
				console.error("Error id:", error)
			})
	}, [id])

	useEffect(() => {
		getCurrentState()
			.then((state) => {
				setState(state)
			})
			.catch((error) => {
				console.error("Error state:", error)
			})
	}, [])

	useEffect(() => {
		const handleState = () => {
			if (state) {
				setCurrentState(!state).then(() => {})
			}
		}

		if (state !== null) {
			handleState()
		}
	}, [state])

	if (codeBlock === null) {
		return <div>Loading...</div>
	}

	return (
		<div style={{ backgroundColor: "grey" }}>
			{state ? (
				<Mentor title={codeBlock[0].title} code={codeBlock[0].code} />
			) : (
				<Student title={codeBlock[0].title} code={codeBlock[0].code} />
			)}
		</div>
	)
}

export default CodeBlockPage
