import { LikeProvider, useLikeCtx } from '../../context/like-context';
import VideoContainer from '../../containers/VideoContainer/VideoContainer';
import PlaylistModal from '../../components/PlaylistModal/PlaylistModal';
import { usePlaylistCtx } from '../../context/playlist-context';

function Likes() {
	const { playlistState } = usePlaylistCtx();
	return (
		<LikeProvider className="main-container">
			<div className="main-container-body">
				<VideoContainer useVideoCtx={useLikeCtx} />
			</div>
			{playlistState.showModal && <PlaylistModal />}
		</LikeProvider>
	);
}
export default Likes;
