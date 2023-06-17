import React, { useEffect, useState } from "react"
import { getCodeBlockById, getCurrentState, setCurrentState } from "../axios"
import Mentor from "../components/Mentor"
import Student from "../components/Student"
import { useParams } from "react-router"

function CodeBlockPage() {
	const url = window.location.href
	const id = url.split("/")[4]
	// const id1 = useParams()
	// console.log(id1) //replace with useParams

	const [codeBlock, setCodeBlock] = useState(null)
	const [state, setState] = useState(null) // better name for state

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
		<div style={{ backgroundColor: "#333333" }}>
			{state ? (
				<Mentor title={codeBlock[0].title} code={codeBlock[0].code} />
			) : (
				<Student title={codeBlock[0].title} code={codeBlock[0].code} />
			)}
		</div>
	)
}

export default CodeBlockPage
