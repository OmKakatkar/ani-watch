import axios from 'axios';
import { API_HISTORY, API_HISTORY_ALL } from '../constants/api-constant';
import { notify } from './notify';
import { success, error } from '../constants/toast-constants';

/**
 * Get User Watch History
 * @async
 * @function
 * @returns {Promise<Array>} User History Videos
 */
export const getHistory = async authToken => {
	try {
		const { data } = await axios.get(API_HISTORY, {
			headers: {
				authorization: authToken
			}
		});
		return data.history;
	} catch (err) {
		notify(error, 'Unable to fetch data');
		console.error('Error GET HISTORY', err.response.status);
	}
};

/**
 * Add video to History
 * @async
 * @function
 * @returns {Promise<Array>} User History Videos
 */
export const addToHistory = async (authToken, video) => {
	try {
		const { data } = await axios.post(
			API_HISTORY,
			{ video },
			{
				headers: {
					authorization: authToken
				}
			}
		);
		return data.history;
	} catch (err) {
		if (err.status.response === 404) {
			notify(error, 'Please login');
		}
		if (err.response.status !== 409 && err.response.status !== 404) {
			notify(error, 'Some error occured');
			console.error('Error ADD HISTORY', err.response.status);
		}
	}
};

/**
 * Remove video from History
 * @async
 * @function
 * @returns {Promise<Array>} User History Videos
 */
export const removeFromHistory = async (authToken, { _id }) => {
	try {
		const { data } = await axios.delete(`${API_HISTORY}/${_id}`, {
			headers: {
				authorization: authToken
			}
		});
		notify(success, 'Removed from History');
		return data.history;
	} catch (err) {
		notify(error, 'Unable to remove data');
		console.error('Error REMOVE HISTORY', err.response.status);
	}
};

/**
 * Clear History
 * @async
 * @function
 * @returns {Promise<Array>} User History Videos
 */
export const clearHistory = async authToken => {
	try {
		const { data } = await axios.delete(API_HISTORY_ALL, {
			headers: {
				authorization: authToken
			}
		});
		notify(success, 'History Cleared Successfully');
		return data.history;
	} catch (err) {
		notify(error, 'Unable to remove data');
		console.error('Error REMOVE HISTORY ALL', err.response.status);
	}
};
