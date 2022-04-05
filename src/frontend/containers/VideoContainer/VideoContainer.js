import { VideoCard } from '../../components/';
import './VideoContainer.css';

function VideoContainer({ useVideoCtx }) {
	const { status, videos } = useVideoCtx();
	return (
		<div className="video-grid">
			{status === 'success' &&
				videos.map(videoData => (
					<VideoCard
						key={videoData._id}
						videoData={videoData}
						useVideoCtx={useVideoCtx}
					/>
				))}
		</div>
	);
}

export default VideoContainer;
