import VideoContainer from '../../containers/VideoContainer/VideoContainer';
import { useVideo } from '../../context/video-context';
import { homeMenu } from '../../constants/hover-menu';

function Home() {
	const { videoState } = useVideo();
	const { videoList } = videoState;
	return <VideoContainer videoList={videoList} menu={homeMenu} />;
}

export default Home;
