import { createContext, useContext, useState, useEffect } from 'react';
import { getVideos } from '../utils/video-request';

const VideoContext = createContext();

const VideoProvider = ({ children }) => {
	const [videoList, setVideoList] = useState();
	const getVideoList = async () => {
		const videos = await getVideos();
		setVideoList(videos);
	};

	useEffect(() => {
		getVideoList();
	}, []);

	const providerData = { videoList };
	return (
		<VideoContext.Provider value={providerData}>
			{children}
		</VideoContext.Provider>
	);
};

const useVideo = () => useContext(VideoContext);

export { useVideo, VideoProvider };
