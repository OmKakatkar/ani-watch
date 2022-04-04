import { useParams } from 'react-router-dom';

function SingleVideo() {
	const { videoId } = useParams();
	return <div className="text-white">SingleVideo {videoId}</div>;
}

export default SingleVideo;
