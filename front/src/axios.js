import axios from "axios"

const url = "http://localhost:8080"

export const getAllCodeBlocks = async () => {
	try {
		console.log(`${url}/api/getAllCodeBlocks`)
		const response = await axios.get(`${url}/api/getAllCodeBlocks`)

		const codeBlocks = response.data
		return codeBlocks
	} catch (error) {
		console.error("Error:", error)
		return null
	}
}
