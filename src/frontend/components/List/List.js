import './List.css';
import { useAuth } from '../../context/auth-context';
import { usePlaylistCtx } from '../../context/playlist-context';

function List({ videoData, useVideoCtx }) {
	const { user } = useAuth();
	const { execute, menuList } = useVideoCtx();
	const { playlistDispatch } = usePlaylistCtx();
	return (
		<ul>
			{menuList &&
				menuList.map(({ id, icon, buttonText, handleClick, type }) => (
					<li key={id} className="list-list-item">
						<button
							className="list-item-link text-white"
							onClick={async () => {
								const resp = await handleClick(user.token, videoData);
								type &&
									playlistDispatch({
										type,
										payload: { playlists: resp, currentVideo: videoData }
									});
								execute(user.token);
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
