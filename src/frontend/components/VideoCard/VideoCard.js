import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { getImageUrl } from '../../utils/video-helpers';
import './VideoCard.css';

function VideoCard({ videoData }) {
	const { _id, title, category } = videoData;
	return (
		<article className="video-card flex">
			<Link to={`/watch/${category}/${_id}`} className='flex-column'>
				<div className="card-media">
					<img src={getImageUrl(_id)} alt={title} />
				</div>
				<div className="video-card-body">
					<h3 className="text-md text-white card-heading">{title}</h3>
					<h5 className="text-sm text-gray">{category}</h5>
				</div>
			<div className="video-card-spacer"></div>
			</Link>
			<button className="card-btn text-lg">
				<FontAwesomeIcon icon={faEllipsisVertical} />
			</button>
		</article>
	);
}

export default VideoCard;
