import { VideoCard } from '../../components/';
import './VideoContainer.css';

function VideoContainer({ videoList }) {
	return (
		<div className="video-grid">
			{videoList.map(videoData => (
				<VideoCard key={videoData._id} videoData={videoData} />
			))}
		</div>
	);
}

export default VideoContainer;
