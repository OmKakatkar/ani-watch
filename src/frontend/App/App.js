import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import SideBar from '../shared/SideBar/SideBar';
import VideoContainer from '../containers/VideoContainer/VideoContainer';
import MockAPI from '../mock/MockAPI';
import { Login, Page404, SignUp } from '../pages';
import './App.css';
import Header from '../shared/NavBar/Header';

function App() {
	return (
		<div className="app">
			<Header />
			<SideBar />
			<Routes>
				<Route path="/" element={<VideoContainer />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/mockman" element={<MockAPI />} />
				<Route path="*" element={<Page404 />} />
			</Routes>
			<ToastContainer autoClose={2000} />
		</div>
	);
}

export default App;
