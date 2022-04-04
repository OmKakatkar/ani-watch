import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import SideBar from '../shared/SideBar/SideBar';
import Header from '../shared/NavBar/Header';
import MockAPI from '../mock/MockAPI';
import {
	Login,
	Page404,
	SignUp,
	Home,
	History,
	Likes,
	Playlist,
	WatchLater
} from '../pages';
import './App.css';
import { useAuth } from '../context/auth-context';

function App() {
	const { user } = useAuth();
	return (
		<div className="app">
			<Header />
			<SideBar />
			<div className="main-container">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/mockman" element={<MockAPI />} />
					{!user.token && (
						<>
							<Route path="/login" element={<Login />} />
							<Route path="/signup" element={<SignUp />} />
						</>
					)}
					{user.token && (
						<>
							<Route path="/history" element={<History />} />
							<Route path="/likes" element={<Likes />} />
							<Route path="/playlist" element={<Playlist />} />
							<Route path="/watchlater" element={<WatchLater />} />
						</>
					)}
					<Route path="*" element={<Page404 />} />
				</Routes>
			</div>
			<ToastContainer autoClose={2000} />
		</div>
	);
}

export default App;
