import { createContext, useContext, useState } from 'react';
import { login, signup } from '../utils/auth-request';

const AuthContext = createContext();

const currentUser = 'ANI_WATCH_USER';

const AuthProvider = ({ children }) => {
	const initialUser = JSON.parse(localStorage.getItem(currentUser)) || {};
	const [user, setUser] = useState(initialUser);

	const handleLogin = async ({ email, password }) => {
		try {
			const { foundUser: user, encodedToken: token } = await login({
				email,
				password
			});
			if (token) {
				localStorage.setItem(currentUser, JSON.stringify({ user, token }));
				setUser(JSON.parse(localStorage.getItem(currentUser)));
			}
		} catch (err) {
			console.error(err);
		}
	};

	const handleSignUp = async ({ firstName, lastName, email, password }) => {
		try {
			const { createdUser: user, encodedToken: token } = await signup({
				firstName,
				lastName,
				email,
				password
			});
			if (token) {
				localStorage.setItem(currentUser, JSON.stringify({ user, token }));
				setUser(JSON.parse(localStorage.getItem(currentUser)));
			}
		} catch (err) {
			console.error(err);
		}
	};

	const handleLogout = () => {
		localStorage.removeItem(currentUser);
		setUser({});
	};

	const providerData = { user, handleLogin, handleLogout, handleSignUp };

	return (
		<AuthContext.Provider value={providerData}>{children}</AuthContext.Provider>
	);
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
