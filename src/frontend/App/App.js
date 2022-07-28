import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import SideBar from "../shared/SideBar/SideBar";
import Header from "../shared/NavBar/Header";
import MockAPI from "../mock/MockAPI";
import {
	Login,
	Page404,
	SignUp,
	History,
	Likes,
	Playlist,
	Home,
	WatchLater,
} from "../pages";
import { SingleVideo } from "../components";
import SinglePlaylist from "../pages/Playlist/SinglePlaylist";
import "./App.css";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import Auth from "../components/Auth/Auth";

function App() {
	return (
		<div className="app">
			<Header />
			<SideBar />
			<div className="main-container">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/mockman" element={<MockAPI />} />
					<Route path="/watch/:category/:videoId" element={<SingleVideo />} />
					<Route element={<Auth />}>
						<Route path="/login" element={<Login />} />
						<Route path="/signup" element={<SignUp />} />
					</Route>
					<Route element={<PrivateRoute />}>
						<Route path="/history" element={<History />} />
						<Route path="/likes" element={<Likes />} />
						<Route path="/playlist" element={<Playlist />} />
						<Route path="/playlist/:playlistId" element={<SinglePlaylist />} />
						<Route path="/watchlater" element={<WatchLater />} />
					</Route>
					<Route path="*" element={<Page404 />} />
				</Routes>
			</div>
			<ToastContainer autoClose={2000} />
		</div>
	);
}

export default App;
