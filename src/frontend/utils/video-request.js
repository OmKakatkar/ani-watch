import axios from 'axios';
import { API_ALL_VIDEOS, API_SINGLE_VIDEO } from '../constants/api-constant';
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
		const { data } = await axios.get(API_ALL_VIDEOS);
		return data.videos;
	} catch (err) {
		notify(error, 'Unable to fetch data');
		console.error('Error GET VIDEOS', err.response.status);
	}
};

/**
 * Fetch single video from API
 * @async
 * @function
 * @return {Promise<Object>} Single Video Object
 */
export const getSingleVideo = async id => {
	try {
		const { data } = await axios.get(`${API_SINGLE_VIDEO}/${id}`);
		return data.video;
	} catch (err) {
		console.log(err);
		notify(error, 'Unable to fetch data');
		console.error('Error GET SINGLE VIDEO', err.response.status);
	}
};
