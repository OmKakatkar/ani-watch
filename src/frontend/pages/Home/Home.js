import VideoContainer from '../../containers/VideoContainer/VideoContainer';
import { useVideo } from '../../context/video-context';

function Home() {
	const { videoState } = useVideo();
	const { videoList } = videoState;
	return <VideoContainer videoList={videoList} />;
}

export default Home;
