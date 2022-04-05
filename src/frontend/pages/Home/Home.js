import { HomeProvider, useHomeCtx } from '../../context/home-context';
import VideoContainer from '../../containers/VideoContainer/VideoContainer';

function Home() {
	return (
		<HomeProvider className="main-container">
			<VideoContainer useVideoCtx={useHomeCtx} />
		</HomeProvider>
	);
}
export default Home;
