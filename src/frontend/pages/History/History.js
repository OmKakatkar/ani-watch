import { HistoryProvider, useHistoryCtx } from '../../context/history-context';
import VideoContainer from '../../containers/VideoContainer/VideoContainer';
import VideoGridHead from '../../components/VideoGridHead/VideoGridHead';
import PlaylistModal from '../../components/PlaylistModal/PlaylistModal';
import { usePlaylistCtx } from '../../context/playlist-context';

function History() {
	const { playlistState } = usePlaylistCtx();

	return (
		<HistoryProvider className="main-container">
			<VideoGridHead useVideoCtx={useHistoryCtx} />
			<div className="main-container-body main-container-body-offset">
				<h1 className="text-white text-center text-heading">Your History</h1>
				<VideoContainer useVideoCtx={useHistoryCtx} />
			</div>
			{playlistState.showModal && <PlaylistModal />}
		</HistoryProvider>
	);
}
export default History;
