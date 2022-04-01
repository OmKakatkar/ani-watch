import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Login, SignUp } from '../pages';
import './App.css';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<SignUp />} />
			</Routes>
			<ToastContainer autoClose={2000}/>
		</div>
	);
}

export default App;
