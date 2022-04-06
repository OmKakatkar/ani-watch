import { createContext, useContext } from 'react';
import useAsync from '../hook/useAsync';
import { likeMenu } from '../constants/hover-menu';
import { getLiked } from '../utils/like-request';
import { useAuth } from './auth-context';

const LikeContext = createContext();
const LikeProvider = ({ children }) => {
	const { user } = useAuth();
	const {
		status,
		value: videos,
		error,
		execute
	} = useAsync(getLiked, true, user.token);
	const menuList = likeMenu;
	const providerData = {
		status,
		videos,
		error,
		execute,
		menuList
	};
	return (
		<LikeContext.Provider value={providerData}>{children}</LikeContext.Provider>
	);
};

const useLikeCtx = () => useContext(LikeContext);

export { useLikeCtx, LikeProvider };
