import axios from "axios";
const url = process.env.REACT_APP_AXIOS === 'production' ? '/api' : "http://localhost:5001/api";

const registerUser = async (userData) => {
	const response = await axios.post(`${url}/users/register`, userData);
	return response.data;
};
const loginUser = async (userData) => {
	try {
		const response = await axios.post(`${url}/users/login`, userData);
		return response.data;
	} catch (error) {
		return error;
	}
};
const verifyUser = async (token) => {
	try {
		const response = await axios.get(`${url}/users/verify-user`, {
			headers: {
				[process.env.REACT_APP_TOKEN_HEADER_KEY]: token,
			},
		});
		return response.data;
	} catch (error) {
		return error;
	}
};

export { 
    registerUser, 
    loginUser, 
    verifyUser };
