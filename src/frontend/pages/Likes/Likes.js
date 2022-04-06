import { LikeProvider, useLikeCtx } from '../../context/like-context';
import VideoContainer from '../../containers/VideoContainer/VideoContainer';

function Likes() {
	return (
		<LikeProvider className="main-container">
			<div className="main-container-body">
				<VideoContainer useVideoCtx={useLikeCtx} />
			</div>
		</LikeProvider>
	);
}
export default Likes;
