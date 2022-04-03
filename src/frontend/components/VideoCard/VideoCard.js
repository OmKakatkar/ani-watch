import ReactPlayer from 'react-player/youtube';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { getImageUrl, getVideoUrl } from '../../utils/video-helpers';
import './VideoCard.css';

export function VideoCard({ videoData }) {
	const { _id, title, category } = videoData;
	console.table(videoData);
	return (
		<article className="video-card">
			<div className="card-media">
				<ReactPlayer
					url={getVideoUrl(_id)}
					light={getImageUrl(_id)}
					controls
					width="100%"
					height="100%"
				/>
			</div>
			<div className="video-card-body">
				<h3 className="text-md text-white card-heading">{title}</h3>
				<h5 className="text-sm text-gray">{category}</h5>
			</div>
			<button className="card-btn text-lg">
				<FontAwesomeIcon icon={faEllipsisVertical} />
			</button>
		</article>
	);
}
