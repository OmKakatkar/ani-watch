import {
	WatchLaterProvider,
	useWatchLaterCtx
} from '../../context/watchlater-context';
import VideoContainer from '../../containers/VideoContainer/VideoContainer';
import PlaylistModal from '../../components/PlaylistModal/PlaylistModal';
import { usePlaylistCtx } from '../../context/playlist-context';

function WatchLater() {
	const { playlistState } = usePlaylistCtx();

	return (
		<WatchLaterProvider className="main-container">
			<div className="main-container-body">
				<h1 className="text-white text-center text-heading">
					Your Watch Later
				</h1>
				<VideoContainer useVideoCtx={useWatchLaterCtx} />
			</div>
			{playlistState.showModal && <PlaylistModal />}
		</WatchLaterProvider>
	);
}
export default WatchLater;
