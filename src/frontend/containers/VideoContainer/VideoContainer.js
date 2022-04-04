import { VideoCard } from '../../components/';
import './VideoContainer.css';

function VideoContainer({ videoList, menu }) {
	return (
		<div className="video-grid">
			{videoList.map(videoData => (
				<VideoCard key={videoData._id} videoData={videoData} menu={menu} />
			))}
		</div>
	);
}

export default VideoContainer;
