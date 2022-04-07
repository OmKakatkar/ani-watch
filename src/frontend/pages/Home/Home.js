import { HomeProvider, useHomeCtx } from '../../context/home-context';
import VideoContainer from '../../containers/VideoContainer/VideoContainer';
import PlaylistModal from '../../components/PlaylistModal/PlaylistModal';
import { usePlaylistCtx } from '../../context/playlist-context';

function Home() {
	const { playlistState } = usePlaylistCtx();

	return (
		<HomeProvider className="main-container">
			<div className="main-container-body">
				<VideoContainer useVideoCtx={useHomeCtx} />
			</div>
			{playlistState.showModal && <PlaylistModal />}
		</HomeProvider>
	);
}
export default Home;
