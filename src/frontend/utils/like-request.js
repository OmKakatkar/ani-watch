import axios from 'axios';
import { API_LIKES } from '../constants/api-constant';
import { notify } from './notify';
import { success, error, info } from '../constants/toast-constants';

/**
 * Get User Liked Videos
 * @async
 * @function
 * @returns {Promise<Array>} User Liked Videos
 */
export const getLiked = async authToken => {
	try {
		const { data } = await axios.get(API_LIKES, {
			headers: {
				authorization: authToken
			}
		});
		return data.likes;
	} catch (err) {
		notify(error, 'Unable to fetch data');
		console.error('Error GET LIKED', err.response.status);
	}
};

/**
 * Add video to Liked Videos
 * @async
 * @function
 * @returns {Promise<Array>} User Liked Videos
 */
export const addToLiked = async (authToken, video) => {
	try {
		const { data } = await axios.post(
			API_LIKES,
			{ video },
			{
				headers: {
					authorization: authToken
				}
			}
		);
		notify(success, 'Liked Video');
		return data.likes;
	} catch (err) {
		if (err.response.status === 409) {
			notify(info, 'Please goto Liked Videos to Unlike');
		}
		if (err.response.status !== 409 && err.response.status !== 404) {
			notify(error, 'Some error occured');
		}
		console.error('Error ADD LIKED', err.response.status);
	}
};

/**
 * Remove video from Liked
 * @async
 * @function
 * @returns {Promise<Array>} User Liked Videos
 */
export const removeFromLiked = async (authToken, { _id }) => {
	try {
		const { data } = await axios.delete(`${API_LIKES}/${_id}`, {
			headers: {
				authorization: authToken
			}
		});
		notify(success, 'Unliked Video');
		return data.likes;
	} catch (err) {
		notify(error, 'Unable to remove data');
		console.error('Error REMOVE LIKED', err.response.status);
	}
};
