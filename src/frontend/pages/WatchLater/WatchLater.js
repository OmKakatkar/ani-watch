import {
	WatchLaterProvider,
	useWatchLaterCtx
} from '../../context/watchlater-context';
import VideoContainer from '../../containers/VideoContainer/VideoContainer';

function WatchLater() {
	return (
		<WatchLaterProvider className="main-container">
			<div className="main-container-body">
				<VideoContainer useVideoCtx={useWatchLaterCtx} />
			</div>
		</WatchLaterProvider>
	);
}
export default WatchLater;
