import { HistoryProvider, useHistoryCtx } from '../../context/history-context';
import VideoContainer from '../../containers/VideoContainer/VideoContainer';
import VideoGridHead from '../../components/VideoGridHead/VideoGridHead';

function History() {
	return (
		<HistoryProvider className="main-container">
			<VideoGridHead useVideoCtx={useHistoryCtx} />
			<div className="main-container-body main-container-body-offset">
				<VideoContainer useVideoCtx={useHistoryCtx} />
			</div>
		</HistoryProvider>
	);
}
export default History;
