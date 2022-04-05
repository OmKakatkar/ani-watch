import {
	WatchLaterProvider,
	useWatchLaterCtx
} from '../../context/watchlater-context';
import VideoContainer from '../../containers/VideoContainer/VideoContainer';

function WatchLater() {
	return (
		<WatchLaterProvider className="main-container">
			<VideoContainer useVideoCtx={useWatchLaterCtx} />
		</WatchLaterProvider>
	);
}
export default WatchLater;
