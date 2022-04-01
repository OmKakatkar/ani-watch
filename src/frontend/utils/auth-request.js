import axios from 'axios';
import { API_LOGIN, API_SIGNUP } from '../constants/api-constant';
import { notify } from './notify';
import { error, success } from '../constants/toast-constants';

/**
 * Login the user if email and password are correct
 * @param {string} email
 * @param {string} password
 * @return user
 */
export const login = async ({ email, password }) => {
	try {
		const { data } = await axios.post(API_LOGIN, {
			email,
			password
		});
		notify(success, 'Login Successful!');
		return data;
	} catch (err) {
		if (err.response.status === 404 || err.response.status === 401) {
			notify(error, 'Wrong email or password');
		} else {
			console.error(err.response.status);
			notify(error, 'Internal Error');
		}
		return {};
	}
};

/**
 * SignUp the user with given credentials
 * @param {string} firstName
 * @param {string} lastName
 * @param {string} email
 * @param {string} password
 * @return user
 */
export const signup = async ({ firstName, lastName, email, password }) => {
	try {
		const { data } = await axios.post(API_SIGNUP, {
			firstName,
			lastName,
			email,
			password
		});
		notify(success, 'SignUp Successful!');
		return data;
	} catch (err) {
		if (err.response.status === 422) {
			notify(error, 'User Already Exists, check your credentials');
		} else {
			console.error(err.response.status);
			notify(error, 'Internal Error');
		}
		return {};
	}
};
