import { useAuth } from '../../context/auth-context';
import { clearHistory } from '../../utils/history-request';
import './VideoGridHead.css';

function VideoGridHead({ useVideoCtx }) {
	const { execute } = useVideoCtx();
	const { user } = useAuth();

	return (
		<div className="flex-container video-grid-head">
			<button
				className="btn bg-red rounded"
				onClick={() => {
					clearHistory(user.token);
					execute(user.token);
				}}
			>
				Clear History
			</button>
		</div>
	);
}
export default VideoGridHead;
