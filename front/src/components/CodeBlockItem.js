import React from "react"
import { ListItem, ListItemText } from "@mui/material"
import { useNavigate } from "react-router-dom"

function CodeBlockItem({ title }) {
	const navigate = useNavigate()

	return (
		<div>
			<ListItem button onClick={() => navigate("/code-blocks")}>
				<ListItemText primary={title} />
			</ListItem>
		</div>
	)
}

export default CodeBlockItem
