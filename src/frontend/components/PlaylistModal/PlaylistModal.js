import './PlaylistModal.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import {
	CREATE_PLAYLIST,
	usePlaylistCtx
} from '../../context/playlist-context';
import { useAuth } from '../../context/auth-context';
import {
	addVideoToPlaylist,
	createPlaylist
} from '../../utils/playlist-request';

function PlaylistModal() {
	const [playlistForm, setPlaylistForm] = useState({
		name: '',
		description: ''
	});
	const { playlistState, playlistDispatch } = usePlaylistCtx();
	const { playlists, currentVideo } = playlistState;
	const { user } = useAuth();

	const handleSubmit = async e => {
		e.preventDefault();
		if (playlistForm.name !== '' && playlistForm.description !== '') {
			const resp = await createPlaylist(user.token, {
				playlist: {
					title: playlistForm.name,
					description: playlistForm.description
				}
			});
			playlistDispatch({
				type: CREATE_PLAYLIST,
				payload: { playlists: resp }
			});
			setPlaylistForm({ name: '', description: '' });
		}
	};

	const closeModal = e => {
		if (e.target.id === 'modal') {
			playlistDispatch({ type: 'CLOSE_MODAL' });
		}
	};

	const handleChange = e => {
		setPlaylistForm({ ...playlistForm, [e.target.name]: e.target.value });
	};
	return (
		<div className="modal flex-container" id="modal" onClick={closeModal}>
			<div className="modal-body">
				<div className="modal-list">
					{playlists.length > 0 &&
						playlists.map(({ playlist, _id }) => (
							<div key={_id}>
								<button
									className="modal-list-button text-white text-lg"
									onClick={async () => {
										return await addVideoToPlaylist(
											user.token,
											{ _id },
											currentVideo
										);
									}}
								>
									<FontAwesomeIcon icon={faAdd} />
									<span>{playlist.title}</span>
								</button>
							</div>
						))}
				</div>
				<form
					onSubmit={handleSubmit}
					className="modal-form flex-container flex-column"
				>
					<label htmlFor="name" className="visually-hidden">
						Playlist Name
					</label>
					<input
						type="text"
						name="name"
						placeholder="Enter Playlist Name"
						className="input text-center"
						value={playlistForm.name}
						onChange={handleChange}
					/>
					<label htmlFor="description" className="visually-hidden">
						Playlist Description
					</label>
					<input
						type="text"
						name="description"
						placeholder="Enter Playlist Description"
						className="input text-center"
						value={playlistForm.description}
						onChange={handleChange}
					/>
					<div className="flex-container">
						<button type="submit" className="btn bg-green rounded">
							Create Playlist
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
export default PlaylistModal;
