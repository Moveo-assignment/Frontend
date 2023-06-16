import { React, useEffect } from "react"
import { ListItem, Divider, List, ListItemText } from "@mui/material"
import CodeBlockItem from "../components/CodeBlockItem"
import { getAllCodeBlocks } from "../axios"

const style = {
	width: "100%",
	maxWidth: 360,
	bgcolor: "background.paper",
}

function LobbyPage({ codeBlockList, setCodeBlockList }) {
	useEffect(() => {
		getAllCodeBlocks()
			.then((codeBlocks) => {
				setCodeBlockList(codeBlocks)
			})
			.catch((error) => {
				console.error("Error:", error)
			})
	}, [])

	return (
		<div>
			<div>
				<h1 style={{ color: "white" }}>Choose Code Box</h1>
			</div>
			<List sx={style} component="nav" aria-label="mailbox folders">
				{codeBlockList.map((item) => {
					return (
						<>
							<CodeBlockItem key={item} title={item.title}></CodeBlockItem>
							<Divider />
						</>
					)
				})}
			</List>
		</div>
	)
}

export default LobbyPage