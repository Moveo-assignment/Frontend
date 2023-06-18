import React from "react"

function SmilyPage() {
	const smily = "😃"

	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				height: "100vh",
			}}
		>
			<h1 style={{ fontSize: "13em", color: "white" }}>{smily}</h1>
		</div>
	)
}

export default SmilyPage
