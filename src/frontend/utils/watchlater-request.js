import axios from 'axios';
import { API_WATCH_LATER } from '../constants/api-constant';
import { notify } from './notify';
import { success, error, info } from '../constants/toast-constants';

// All API request use a user token stored as a constant. This will change later
export const getWatchLater = async authToken => {
	try {
		const { data } = await axios.get(API_WATCH_LATER, {
			headers: {
				authorization: authToken
			}
		});
		return data.watchlater;
	} catch (err) {
		notify(error, 'Unable to fetch data');
		console.error('Error GET WATCHLATER', err.response.status);
	}
};

/**
 * Add video to Watchlater
 * @async
 * @function
 * @returns {Promise<Array>} Watch Later Videos
 */
export const addToWatchLater = async (authToken, video) => {
	try {
		const { data } = await axios.post(
			API_WATCH_LATER,
			{ video },
			{
				headers: {
					authorization: authToken
				}
			}
		);
		notify(success, 'Added to Watch Later');
		return data.watchlater;
	} catch (err) {
		if (err.response.status === 409) {
			notify(info, 'Video exist in Watch Later');
			return [];
		} else {
			notify(error, 'Unable to post data');
			console.error('Error POST WATCHLATER', err.response.status);
		}
	}
};

/**
 * Remove video from Watchlater API
 * @async
 * @function
 * @returns {Promise<Array>} Watch Later Videos
 */
export const removeFromWatchLater = async (authToken, { _id }) => {
	try {
		const { data } = await axios.delete(`${API_WATCH_LATER}/${_id}`, {
			headers: {
				authorization: authToken
			}
		});
		notify(success, 'Removed from Watch Later');
		return data.watchlater;
	} catch (err) {
		notify(error, 'Unable to remove data');
		console.error('Error REMOVE WATCHLATER', err.response.status);
	}
};
