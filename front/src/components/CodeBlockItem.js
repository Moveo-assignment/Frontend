import React from "react"
import { ListItem, ListItemText } from "@mui/material"
import { useNavigate } from "react-router-dom"

function CodeBlockItem({ codeBlock }) {
	const navigate = useNavigate()

	const codeBlockClick = async () => {
		navigate(`/code-blocks/${codeBlock._id}`)
	}

	return (
		<div>
			<ListItem onClick={() => codeBlockClick()}>
				<ListItemText primary={codeBlock.title} />
			</ListItem>
		</div>
	)
}

export default CodeBlockItem
