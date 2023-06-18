import { React, useEffect, useState } from "react"
import { Button, Divider, List } from "@mui/material"
import CodeBlockItem from "../components/CodeBlockItem"
import { getAllCodeBlocks, setIsMentor } from "../axios"

const style = {
	width: "100%",
	maxWidth: 360,
	bgcolor: "background.paper",
}

function LobbyPage() {
	const [codeBlockList, setCodeBlockList] = useState([])

	useEffect(() => {
		getAllCodeBlocks()
			.then((codeBlocks) => {
				setCodeBlockList(codeBlocks)
			})
			.catch((error) => {
				console.error("Error:", error)
			})
	}, [])

	const handleMentor = () => {
		setIsMentor(true).then(() => {
			console.log("im mentor now")
		})
	}
	const handleStudent = () => {
		setIsMentor(false).then(() => {
			console.log("im student now")
		})
	}

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<div>
				<h1 style={{ color: "white" }}>Choose Code Box</h1>
			</div>
			<List sx={style} component="nav" aria-label="mailbox folders">
				{codeBlockList.map((item) => {
					return (
						<div key={item._id}>
							<CodeBlockItem codeBlock={item}></CodeBlockItem>
							<Divider />
						</div>
					)
				})}
			</List>
			<div>
				<Button variant="contained" color="success" onClick={handleMentor}>
					BE A MENTOR
				</Button>
				<Button variant="contained" color="error" onClick={handleStudent}>
					BE A STUDENT
				</Button>
			</div>
		</div>
	)
}

export default LobbyPage
