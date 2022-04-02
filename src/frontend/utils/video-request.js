import axios from 'axios';
import { API_VIDEO } from '../constants/api-constant';
import { notify } from './notify';
import { error } from '../constants/toast-constants';

/**
 * Fetch videos from API
 * @async
 * @function
 * @return {Promise<Array>} List of all videos
 */
export const getVideos = async () => {
	try {
		const { data } = await axios.get(API_VIDEO);
		return data.videos;
	} catch (err) {
		notify(error, 'Unable to fetch data');
		console.error('Error GET VIDEOS', err.response.status);
	}
};
