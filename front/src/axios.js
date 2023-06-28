import axios from "axios"

// const url = "https://backend-roey-rach.onrender.com"
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

export const getIsMentor = async () => {
	try {
		const response = await axios.get(`${url}/api/getIsMentor`)
		return response.data
	} catch (error) {
		console.error("Error getIsMentor:", error)
		return null
	}
}

export const setIsMentor = async (state) => {
	const config = {
		headers: {
			"Content-Type": "application/json",
		},
	}

	try {
		const response = await axios.post(
			`${url}/api/setIsMentor`,
			{ isConnected: state },
			config
		)

		return response.data
	} catch (error) {
		console.error("Error setIsMentor:", error)
		return null
	}
}
