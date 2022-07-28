import { faClock, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import { useAuth } from "../../context/auth-context";
import { getVideoUrl } from "../../utils/video-helpers";
import { getSingleVideo } from "../../utils/video-request";
import { addToWatchLater } from "../../utils/watchlater-request";
import { addToHistory } from "../../utils/history-request";
import { addToLiked } from "../../utils/like-request";
import { getLiked } from "../../utils/like-request";

import "./SingleVideo.css";
import { notify } from "../../utils/notify";
import { error, info } from "../../constants/toast-constants";

function SingleVideo() {
	const { user } = useAuth();
	const { videoId } = useParams();
	const [video, setVideo] = useState({});
	const [loading, setLoading] = useState(false);
	const [likedVideos, setLikedVideos] = useState([]);
	const navigate = useNavigate();
	const location = useLocation();
	useEffect(() => {
		(async () => {
			try {
				setLoading(true);
				const resp = await getSingleVideo(videoId);
				setVideo(resp);
				setLoading(false);
			} catch (err) {
				console.error(err);
			}
		})();
	}, [videoId]);

	useEffect(() => {
		(async () => {
			if (user.token) {
				try {
					setLoading(true);
					const resp = await getLiked(user.token);
					setLikedVideos(resp);
					setLoading(false);
				} catch (err) {
					console.error(err);
				}
			}
		})();
	}, [user.token]);

	const isLiked = Boolean(
		likedVideos && likedVideos.filter(({ _id }) => _id === videoId).length
	);

	return (
		<div className="video-page">
			<div></div>
			<div className="video-wrapper flex-column">
				<ReactPlayer
					url={getVideoUrl(videoId)}
					controls
					playing={true}
					onPlay={async () => {
						setLoading(true);
						if (user.token) {
							await addToHistory(user.token, video);
						}
						setLoading(false);
					}}
				/>

				<div className="flex">
					<h1 className="video-heading text-huge text-white">{video.title}</h1>
					<div className="video-button-container">
						<button
							disabled={loading}
							onClick={async () => {
								setLoading(true);
								if (user.token) {
									if (!isLiked) {
										const resp = await addToLiked(user.token, video);
										setLikedVideos(resp);
									} else {
										notify(info, "Please goto Liked Videos to Unlike");
									}
									setLoading(false);
								} else {
									notify(error, "Please Login");
									navigate("/login", { state: { path: location.pathname } });
								}
							}}
						>
							<FontAwesomeIcon
								icon={faThumbsUp}
								className={`text-white text-xhuge ${isLiked ? "text-red" : ""}`}
							/>
						</button>
						<button
							disabled={loading}
							onClick={async () => {
								if (user.token) {
									setLoading(true);
									await addToWatchLater(user.token, video);
									setLoading(false);
								} else {
									notify(error, "Please Login");
									navigate("/login", { state: { path: location.pathname } });
								}
							}}
						>
							<FontAwesomeIcon
								icon={faClock}
								className="text-white text-xhuge"
							/>
						</button>
					</div>
				</div>
				<p className="video-text text-lg">{video.description}</p>
			</div>
		</div>
	);
}

export default SingleVideo;
