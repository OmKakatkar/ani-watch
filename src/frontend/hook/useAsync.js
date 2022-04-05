import { useReducer, useEffect, useCallback } from 'react';

const ERROR = 'error';
const SUCCESS = 'success';
const PENDING = 'pending';
const IDLE = 'idle';

const reducer = (state, action) => {
	switch (action.type) {
		case PENDING:
		case SUCCESS:
		case ERROR:
			return {
				...state,
				...action.payload
			};
		default:
			return state;
	}
};

// Takes an async function and returns a callback function along with state, error and value.
// Optionally takes a boolean to invoke the callback function immediately
// Can take token as an argument. May support multiple parameters in future.
const useAsync = (asyncFunction, immediate = false, token) => {
	const initialState = {
		status: IDLE,
		value: null,
		error: null
	};

	const [state, dispatch] = useReducer(reducer, initialState);

	const execute = useCallback(
		token => {
			const invoke = async () => {
				try {
					dispatch({ type: PENDING, payload: { status: PENDING } });
					if (token) {
						const resp = await asyncFunction(token);
						dispatch({
							type: SUCCESS,
							payload: { status: SUCCESS, value: resp }
						});
					} else {
						const resp = await asyncFunction(null);
						dispatch({
							type: SUCCESS,
							payload: { status: SUCCESS, value: resp }
						});
					}
				} catch (err) {
					dispatch({ type: SUCCESS, payload: { status: ERROR, error: err } });
				}
			};
			return invoke();
		},
		[asyncFunction]
	);

	useEffect(() => {
		if (immediate) {
			execute(token);
		}
	}, [execute, immediate, token]);
	return { ...state, execute };
};
export default useAsync;
