import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import MockAPI from '../mock/MockAPI';
import { Login, Page404, SignUp } from '../pages';
import './App.css';

function App() {
	return (
		<div className="App">
			<Routes>
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
