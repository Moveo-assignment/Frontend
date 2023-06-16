import React from "react"
import { ListItem, ListItemText } from "@mui/material"
import { useNavigate } from "react-router-dom"

function CodeBlockItem({ codeBlock }) {
	const navigate = useNavigate()

	return (
		<div>
			<ListItem button onClick={() => navigate(`/code-blocks/${codeBlock._id}`)}>
				<ListItemText primary={codeBlock.title} />
			</ListItem>
		</div>
	)
}

export default CodeBlockItem
