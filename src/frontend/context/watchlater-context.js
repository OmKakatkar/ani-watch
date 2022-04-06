import { createContext, useContext } from 'react';
import useAsync from '../hook/useAsync';
import { watchLaterMenu } from '../constants/hover-menu';
import { getWatchLater } from '../utils/watchlater-request';
import { useAuth } from './auth-context';

const WatchLaterContext = createContext();
const WatchLaterProvider = ({ children }) => {
	const { user } = useAuth();
	const {
		status,
		value: videos,
		error,
		execute
	} = useAsync(getWatchLater, true, user.token);
	const menuList = watchLaterMenu;
	const providerData = {
		status,
		videos,
		error,
		execute,
		menuList
	};
	return (
		<WatchLaterContext.Provider value={providerData}>
			{children}
		</WatchLaterContext.Provider>
	);
};

const useWatchLaterCtx = () => useContext(WatchLaterContext);

export { useWatchLaterCtx, WatchLaterProvider };
