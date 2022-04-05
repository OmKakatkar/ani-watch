import { createContext, useContext } from 'react';
import useAsync from '../hook/useAsync';
import { watchLaterMenu } from '../constants/hover-menu';
import { getWatchLater } from '../utils/watchlater-request';

const WatchLaterContext = createContext();
const WatchLaterProvider = ({ children }) => {
	const {
		status,
		value: videos,
		error,
		execute
	} = useAsync(getWatchLater, true);
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
