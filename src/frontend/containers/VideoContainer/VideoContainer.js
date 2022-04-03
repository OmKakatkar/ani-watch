import { VideoCard } from '../../components/';
import { useVideo } from '../../context/video-context';
import './VideoContainer.css';

function VideoContainer() {
	const { state } = useVideo();
	const { videoList } = state;
	return (
		<div className="video-grid">
			{videoList.map(videoData => (
				<VideoCard key={videoData._id} videoData={videoData} />
			))}
		</div>
	);
}

export default VideoContainer;
