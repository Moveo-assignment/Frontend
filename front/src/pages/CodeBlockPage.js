import React, { useEffect, useState } from "react"
import { getCodeBlockById, getIsMentor, setIsMentor } from "../axios"
import Mentor from "../components/Mentor"
import Student from "../components/Student"
import { useParams } from "react-router"
import CircularProgress from "@mui/material/CircularProgress"

function CodeBlockPage() {
	const { id } = useParams()

	const [codeBlock, setCodeBlock] = useState(null)
	const [isMentorState, setIsMentorState] = useState(false)

	useEffect(() => {
		getCodeBlockById(id)
			.then((result) => {
				setCodeBlock(result[0])
			})
			.catch((error) => {
				console.error("Error id:", error)
			})
	}, [id])

	useEffect(() => {
		getIsMentor()
			.then((res) => {
				setIsMentorState(res)
			})
			.catch((error) => {
				console.error("Error state:", error)
			})
	}, [])

	useEffect(() => {
		const handleState = () => {
			if (isMentorState) {
				setIsMentor(!isMentorState).then(() => {})
			}
		}

		if (isMentorState !== null) {
			handleState()
		}
	}, [isMentorState])

	if (codeBlock === null) {
		return (
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<CircularProgress />
			</div>
		)
	}

	return (
		<div style={{ backgroundColor: "#333333" }}>
			{isMentorState ? (
				<Mentor title={codeBlock.title} code={codeBlock.code} roomId={id} />
			) : (
				<Student title={codeBlock.title} code={codeBlock.code} roomId={id} />
			)}
		</div>
	)
}

export default CodeBlockPage
