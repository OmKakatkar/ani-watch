import axios from 'axios';
import { API_PLAY_LIST } from '../constants/api-constant';
import { notify } from './notify';
import { success, error, info } from '../constants/toast-constants';

/**
 * Fetches All Playlists
 * @async
 * @function
 * @returns {Promise<Array>} All Playlists
 */
export const getAllPlaylists = async authToken => {
	try {
		const { data } = await axios.get(API_PLAY_LIST, {
			headers: {
				authorization: authToken
			}
		});
		return data.playlists;
	} catch (err) {
		notify(error, 'Unable to fetch data');
		console.error('Error GET ALL PLAYLISTS', err.response.status);
	}
};

/**
 * Create New Playlist
 * @async
 * @function
 * @returns {Promise<Array>} All Playlists
 */
export const createPlaylist = async (authToken, playlist) => {
	try {
		const { data } = await axios.post(
			API_PLAY_LIST,
			{ playlist },
			{
				headers: {
					authorization: authToken
				}
			}
		);
		notify(success, 'New Playlist Created');
		return data.playlists;
	} catch (err) {
		notify(error, 'Unable to add data');
		console.error('Error POST CREATE PLAYLIST', err.response.status);
	}
};

/**
 * Delete a Playlist
 * @async
 * @function
 * @returns {Promise<Array>} All Playlists
 */
export const deletePlaylist = async (authToken, { _id }) => {
	try {
		const { data } = await axios.delete(`${API_PLAY_LIST}/${_id}`, {
			headers: {
				authorization: authToken
			}
		});
		notify(success, 'Playlist Deleted');
		return data.playlists;
	} catch (err) {
		notify(error, 'Unable to remove data');
		console.error('Error DELETE PLAYLIST', err.response.status);
	}
};

/**
 * Fetch Single Playlist
 * @async
 * @function
 */
export const getSinglePlaylist = async (authToken, id) => {
	try {
		const { data } = await axios.get(`/api/user/playlists/${id}`, {
			headers: {
				authorization: authToken
			}
		});
		return data.playlist;
	} catch (err) {
		notify(error, 'Unable to fetch data');
		console.error('Error GET SINGLE PLAYLIST', err);
	}
};

/**
 * Adds Video to Playlist
 * @async
 * @function
 */
export const addVideoToPlaylist = async (authToken, { _id }, video) => {
	try {
		const { data } = await axios.post(
			`${API_PLAY_LIST}/${_id}`,
			{ video },
			{
				headers: {
					authorization: authToken
				}
			}
		);
		notify(success, 'Added to Playlist');
		return data.playlist;
	} catch (err) {
		if (err.response.status === 409) {
			notify(info, 'Video already in Playlist');
			return;
		}
		notify(error, 'Unable to add data');
		console.error('Error POST ADD VIDEO TO PLAYLIST', err.response.status);
	}
};

/**
 * Delete a Video from Playlist
 * @async
 * @function
 */
export const deleteVideoFromPlaylist = async (
	authToken,
	playlistId,
	videoId
) => {
	try {
		const { data } = await axios.delete(
			`${API_PLAY_LIST}/${playlistId}/${videoId}`,
			{
				headers: {
					authorization: authToken
				}
			}
		);
		notify(success, 'Video Deleted from Playlist');
		return data.playlist;
	} catch (err) {
		notify(error, 'Unable to remove data');
		console.error('Error DELETE VIDEO FROM PLAYLIST', err.response.status);
	}
};
