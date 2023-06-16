import axios from "axios"

const url = "http://localhost:8080"

export const getAllCodeBlocks = async () => {
	try {
		const response = await axios.get(`${url}/api/getAllCodeBlocks`)

		const codeBlocks = response.data
		return codeBlocks
	} catch (error) {
		console.error("Error:", error)
		return null
	}
}

export const getCodeBlockById = async (id) => {
	try {
		const response = await axios.get(`${url}/api/getCodeBlockById/${id}`)

		const codeBlock = response.data
		return codeBlock
	} catch (error) {
		console.error("Error:", error)
		return null
	}
}
