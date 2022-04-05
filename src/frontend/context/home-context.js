import { createContext, useContext } from 'react';
import { getVideos } from '../utils/video-request';
import useAsync from '../hook/useAsync';
import { homeMenu } from '../constants/hover-menu';

const HomeContext = createContext();

const HomeProvider = ({ children }) => {
	const { status, value: videos, error, execute } = useAsync(getVideos, true);
	const menuList = homeMenu;

	const providerData = { status, videos, error, execute, menuList };
	return (
		<HomeContext.Provider value={providerData}>{children}</HomeContext.Provider>
	);
};

const useHomeCtx = () => useContext(HomeContext);

export { useHomeCtx, HomeProvider };
