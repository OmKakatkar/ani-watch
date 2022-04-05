import {
	faArrowDownShortWide,
	faClock,
	faThumbsUp
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';
import { getVideoUrl } from '../../utils/video-helpers';
import { getSingleVideo } from '../../utils/video-request';
import { addToWatchLater } from '../../utils/watchlater-request';
import { useAuth } from '../../context/auth-context';
import Loader from '../Loader/Loader';
import './SingleVideo.css';

function SingleVideo() {
	const { user } = useAuth();
	const { videoId } = useParams();
	const [video, setVideo] = useState({});
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		(async () => {
			try {
				setLoading(true);
				const resp = await getSingleVideo(videoId);
				setVideo(resp);
				setLoading(false);
			} catch (err) {
				console.error(err);
			}
		})();
	}, [videoId]);
	return (
		<div className="video-page">
			<div></div>
			<div className="video-wrapper flex-column">
				{!loading && (
					<ReactPlayer
						url={getVideoUrl(videoId)}
						controls
						onPlay={console.log('Playing')}
					/>
				)}
				<div className="flex">
					<h1 className="video-heading text-huge text-white">{video.title}</h1>
					<div className="video-button-container">
						<button>
							<FontAwesomeIcon
								icon={faThumbsUp}
								className="text-white text-xhuge"
							/>
						</button>
						<button
							onClick={() => {
								addToWatchLater(user.token, video);
							}}
						>
							<FontAwesomeIcon
								icon={faClock}
								className="text-white text-xhuge"
							/>
						</button>
						<button>
							<FontAwesomeIcon
								icon={faArrowDownShortWide}
								className="text-white text-xhuge"
							/>
						</button>
					</div>
				</div>
				<p className="video-text text-lg">{video.description}</p>
			</div>
			{loading && <Loader />}
		</div>
	);
}

export default SingleVideo;
