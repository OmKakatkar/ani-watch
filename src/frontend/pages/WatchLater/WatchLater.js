import { HomeProvider, useHomeCtx } from '../../context/home-context';
import VideoContainer from '../../containers/VideoContainer/VideoContainer';

function WatchLater() {
	return (
		<HomeProvider className="main-container">
			<VideoContainer useVideoCtx={useHomeCtx} />
		</HomeProvider>
	);
}
export default WatchLater;
