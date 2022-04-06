import { LikeProvider, useLikeCtx } from '../../context/like-context';
import VideoContainer from '../../containers/VideoContainer/VideoContainer';
import PlaylistModal from '../../components/PlaylistModal/PlaylistModal';
import { usePlaylistCtx } from '../../context/playlist-context';

function Likes() {
	const { playlistState } = usePlaylistCtx();
	return (
		<LikeProvider className="main-container">
			<div className="main-container-body">
      <h1 className="text-white text-center text-heading">Your Liked Videos</h1>
				<VideoContainer useVideoCtx={useLikeCtx} />
			</div>
			{playlistState.showModal && <PlaylistModal />}
		</LikeProvider>
	);
}
export default Likes;
