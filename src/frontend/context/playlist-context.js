import { useReducer, useContext, createContext } from 'react';
// import { createPlaylist, getAllPlaylists } from '../utils/playlist-request';
// import { addVideoToPlaylist } from './../utils/playlist-request';

const PlaylistContext = createContext();

export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const GET_ALL_PLAYLISTS = 'GET_ALL_PLAYLISTS';
export const CREATE_PLAYLIST = 'CREATE_PLAYLIST';
export const ADD_VIDEO = 'ADD_VIDEO';

const playlistReducer = (state, action) => {
	switch (action.type) {
		case OPEN_MODAL:
			return {
				...state,
				showModal: true,
				playlists: action.payload.playlists,
				currentVideo: action.payload.currentVideo
			};
		case CLOSE_MODAL:
			return {
				...state,
				showModal: false
			};
		case CREATE_PLAYLIST:
			return {
				...state,
				playlists: action.payload.playlists
			};
		case ADD_VIDEO:
			return {
				...state
			};
		default:
			return state;
	}
};

const playlistInitialState = {
	showModal: false,
	playlists: [],
	currentVideo: {}
};

const PlaylistProvider = ({ children }) => {
	const [playlistState, playlistDispatch] = useReducer(
		playlistReducer,
		playlistInitialState
	);

	const providerData = { playlistState, playlistDispatch };
	return (
		<PlaylistContext.Provider value={providerData}>
			{children}
		</PlaylistContext.Provider>
	);
};

const usePlaylistCtx = () => useContext(PlaylistContext);

export { usePlaylistCtx, PlaylistProvider };
