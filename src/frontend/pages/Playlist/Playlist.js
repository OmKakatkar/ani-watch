import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import useAsync from '../../hook/useAsync';
import { useAuth } from '../../context/auth-context';
import { getAllPlaylists } from '../../utils/playlist-request';
import { deletePlaylist } from '../../utils/playlist-request';

import { getImageUrl } from '../../utils/video-helpers';
import { Loader } from '../../components/';

function Playlist() {
	const { user } = useAuth();

	const {
		status,
		value: playlists,
		execute
	} = useAsync(getAllPlaylists, true, user.token);
	console.log(playlists);
	return (
		<div className="main-container-body">
			<div className="video-grid">
				{status === 'pending' && <Loader />}
				{status === 'success' &&
					playlists.map(({ playlist, videos, _id }) => (
						<article className="video-card flex" key={_id}>
							<Link to={`/playlist/${_id}`} className="flex-column">
								<div className="card-media">
									{videos.length > 0 && (
										<img
											src={getImageUrl(videos[0]._id)}
											alt={playlist.title}
										/>
									)}
									{videos.length === 0 && (
										<img
											src="https://res.cloudinary.com/dwubqdebj/image/upload/c_scale,q_50,w_400/v1649251715/ani-watch/wp6349321_dxyou1.webp"
											alt={playlist.title}
										/>
									)}
								</div>
								<div className="video-card-body">
									<h3 className="text-lg text-white card-heading">
										{playlist.title}
									</h3>
									<p className="text-md text-gray">{playlist.description}</p>
									<h5 className="text-md text-gray">{`(${videos.length})`}</h5>
								</div>
								<div className="video-card-spacer"></div>
							</Link>
							<button
								className="card-btn text-lg"
								onClick={async () => {
									await deletePlaylist(user.token, { _id });
									execute(user.token);
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
export default Playlist;
