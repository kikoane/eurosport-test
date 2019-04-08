import axios from 'axios';

import { PLAYERS_JSON } from '../utils/constants';

export default async () => {
	let response = {};
	try {
		response = await axios.get(PLAYERS_JSON);
	} catch (error) {
		throw error;
	}
	return response.data;
}