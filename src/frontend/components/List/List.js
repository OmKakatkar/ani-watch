import './List.css';
import { useAuth } from '../../context/auth-context';
import { usePlaylistCtx } from '../../context/playlist-context';
import { notify } from '../../utils/notify';
import { error } from '../../constants/toast-constants';

function List({ videoData, useVideoCtx }) {
	const { user } = useAuth();
	const { execute, menuList } = useVideoCtx();
	const { playlistDispatch } = usePlaylistCtx();
	return (
		<ul>
			{menuList &&
				menuList.map(({ id, icon, buttonText, handleClick, type, refresh }) => (
					<li key={id} className="list-list-item">
						<button
							className="list-item-link text-white"
							onClick={async () => {
								if (user.token) {
									const resp = await handleClick(user.token, videoData);
									type &&
										playlistDispatch({
											type,
											payload: { playlists: resp, currentVideo: videoData }
										});
									refresh && execute(user.token);
								} else {
									notify(error, 'Please Login');
								}
							}}
						>
							<div className="text-left">
								{icon}
								<span>{buttonText}</span>
							</div>
						</button>
					</li>
				))}
		</ul>
	);
}
export default List;
