import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Input } from '../../../components';
import { LOGIN_DB } from '../../../constants/login-form-data';
import { TEST_USER_LOGIN } from '../../../constants/test-user';
import { useAuth } from '../../../context/auth-context';

import '../Auth.css';

function Login() {
	const initialLoginData = {
		email: '',
		password: ''
	};

	const [isLoginRemember, setIsLoginRemember] = useState(false);

	const { handleLogin } = useAuth();
	const [loginData, setLoginData] = useState(initialLoginData);

	const handleChange = e => {
		setLoginData({ ...loginData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async e => {
		e.preventDefault();
		await handleLogin(loginData, isLoginRemember);
	};

	const handleGuestLogin = async e => {
		setLoginData(TEST_USER_LOGIN);
		setIsLoginRemember(true);
	};

	return (
		<main className="flex-container auth-container">
			<div className="form-container">
				<form className="flex-container flex-column" onSubmit={handleSubmit}>
					<h1 className="text-xhuge form-heading">Login</h1>
					{LOGIN_DB.map(({ id, type, label, name, autoComplete }) => (
						<Input
							key={id}
							type={type}
							label={label}
							name={name}
							autoComplete={autoComplete}
							value={loginData[name]}
							handleChange={handleChange}
						/>
					))}
					<div className="input-container input-wrap">
						<label htmlFor="isLoginRemember" className="checkbox text-sm">
							<input
								type="checkbox"
								name="isLoginRemember"
								id="isLoginRemember"
								className="checkbox-input"
								checked={isLoginRemember}
								onChange={() =>
									setIsLoginRemember(
										(currentIsLoginRemember) => !currentIsLoginRemember
									)
								}
							/>
							<div className="checkbox-icon"></div>
							Remember me
						</label>
						{/* <Link to="/password-reset" className="form-link">
							Forgot Password?
						</Link> */}
					</div>
					<button
						type="submit"
						className="btn rounded bg-blue"
						disabled={!loginData.email || !loginData.password}
					>
						Login
					</button>
				</form>
				<button
					type="submit"
					className="btn rounded bd-blue"
					onClick={handleGuestLogin}
				>
					Guest Login
				</button>
				<div className="text-center">
					<Link to="/signup" className="form-link">
						Create an account
					</Link>
				</div>
			</div>
		</main>
	);
}

export default Login;
