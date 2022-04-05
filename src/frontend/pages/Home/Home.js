import { HomeProvider, useHomeCtx } from '../../context/home-context';
import VideoContainer from '../../containers/VideoContainer/VideoContainer';

function Home() {
	return (
		<HomeProvider className="main-container">
			<div className="main-container-body">
				<VideoContainer useVideoCtx={useHomeCtx} />
			</div>
		</HomeProvider>
	);
}
export default Home;
