import axios from "axios"

const url = "http://localhost:8080"

export const getAllCodeBlocks = async () => {
	try {
		const response = await axios.get(`${url}/api/getAllCodeBlocks`)

		const codeBlocks = response.data
		return codeBlocks
	} catch (error) {
		console.error("Error getAllCodeBlocks:", error)
		return null
	}
}

export const getCodeBlockById = async (id) => {
	try {
		const response = await axios.get(`${url}/api/getCodeBlockById/${id}`)

		const codeBlock = response.data
		return codeBlock
	} catch (error) {
		console.error("Error getCodeBlockById:", error)
		return null
	}
}

export const getCurrentState = async () => {
	try {
		const response = await axios.get(`${url}/api/getCurrentState`)
		return response.data
	} catch (error) {
		console.error("Error getCurrentState:", error)
		return null
	}
}

export const setCurrentState = async (state) => {
	const config = {
		headers: {
			"Content-Type": "application/json",
		},
	}

	try {
		const response = await axios.post(
			`${url}/api/setCurrentState`,
			{ isConnected: state },
			config
		)

		return response.data
	} catch (error) {
		console.error("Error setCurrentState:", error)
		return null
	}
}
