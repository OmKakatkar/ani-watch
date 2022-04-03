import { createContext, useContext, useReducer, useEffect } from 'react';
import { getVideos } from '../utils/video-request';

const VideoContext = createContext();

const reducer = (state, action) => {
	switch (action.type) {
		case 'GET_VIDEOS':
			return {
				...state,
				videoList: action.payload
			};
		default:
			return state;
	}
};

const VideoProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, { videoList: [] });
	const getVideoList = async () => {
		const videos = await getVideos();
		dispatch({ type: 'GET_VIDEOS', payload: videos });
	};

	useEffect(() => {
		getVideoList();
	}, []);

	const providerData = { state };
	return (
		<VideoContext.Provider value={providerData}>
			{children}
		</VideoContext.Provider>
	);
};

const useVideo = () => useContext(VideoContext);

export { useVideo, VideoProvider };
