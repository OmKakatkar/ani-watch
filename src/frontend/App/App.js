import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import SideBar from '../shared/SideBar/SideBar';
import Header from '../shared/NavBar/Header';
import MockAPI from '../mock/MockAPI';
import { Login, Page404, SignUp, Home } from '../pages';
import './App.css';

function App() {
	return (
		<div className="app">
			<Header />
			<SideBar />
			<div className="main-container">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<SignUp />} />
					<Route path="/mockman" element={<MockAPI />} />
					<Route path="*" element={<Page404 />} />
				</Routes>
			</div>
			<ToastContainer autoClose={2000} />
		</div>
	);
}

export default App;
