import { React, useEffect, useState } from "react"
import { getCodeBlockById } from "../axios"

function CodeBlockPage() {
	const url = window.location.href
	const id = url.split("/")[4]

	const [codeBlock, setCodeBlock] = useState(null)

	useEffect(() => {
		getCodeBlockById(id)
			.then((result) => {
				setCodeBlock(result)
				console.log(result)
			})
			.catch((error) => {
				console.error("Error:", error)
			})
	}, [id])

	return (
		<div style={{ backgroundColor: "red" }}>
			{codeBlock && codeBlock[0] && codeBlock[0].title}{" "}
			{/* Add additional check */}
		</div>
	)
}

export default CodeBlockPage
