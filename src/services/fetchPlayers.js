import axios from 'axios';

const API_URL = `https://eurosportdigital.github.io/eurosport-web-developer-recruitment/headtohead.json`;

export default async () => {
	let response = {};
	try {
		response = await axios.get(API_URL);
	} catch (error) {
		throw error;
	}
	return response.data;
}