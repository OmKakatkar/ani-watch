import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import { useAuth } from '../../context/auth-context';
import {
	deleteVideoFromPlaylist,
	getSinglePlaylist
} from '../../utils/playlist-request';

import { getImageUrl } from '../../utils/video-helpers';
import { Loader } from '../../components/';

function SinglePlaylist() {
	const { user } = useAuth();
	const { playlistId } = useParams();
	const [status, setStatus] = useState('idle');
	const [playlistData, setPlaylistData] = useState({});

	useEffect(() => {
		(async () => {
			setStatus('pending');
			const resp = await getSinglePlaylist(user.token, { playlistId });
			setPlaylistData(resp);
			setStatus('success');
		})();
	}, [user.token, playlistId]);

	return (
		<div className="main-container-body">
			<div className="video-grid">
				{status === 'pending' && <Loader />}
				{status === 'success' &&
					playlistData.videos &&
					playlistData.videos.map(({ title, _id, category }) => (
						<article className="video-card flex" key={_id}>
							<Link to={`/watch/${category}/${_id}`} className="flex-column">
								<div className="card-media">
									<img src={getImageUrl(_id)} alt={title} />
								</div>
								<div className="video-card-body">
									<h3 className="text-md text-white card-heading">{title}</h3>
									<h5 className="text-sm text-gray">{category}</h5>
								</div>
								<div className="video-card-spacer"></div>
							</Link>
							<button
								className="card-btn text-lg"
								onClick={async () => {
									setStatus('pending');
									const resp = deleteVideoFromPlaylist(
										user.token,
										playlistData._id,
										_id
									);
									setPlaylistData(resp);
									setStatus('success');
								}}
							>
								<FontAwesomeIcon icon={faTrash} />
							</button>
						</article>
					))}
			</div>
		</div>
	);
}
export default SinglePlaylist;
