import { createContext, useContext } from 'react';
import useAsync from '../hook/useAsync';
import { historyMenu } from '../constants/hover-menu';
import { getHistory } from '../utils/history-request';
import { useAuth } from './auth-context';

const HistoryContext = createContext();
const HistoryProvider = ({ children }) => {
	const { user } = useAuth();
	const {
		status,
		value: videos,
		error,
		execute
	} = useAsync(getHistory, true, user.token);
	const menuList = historyMenu;
	const providerData = {
		status,
		videos,
		error,
		execute,
		menuList
	};
	return (
		<HistoryContext.Provider value={providerData}>
			{children}
		</HistoryContext.Provider>
	);
};

const useHistoryCtx = () => useContext(HistoryContext);

export { useHistoryCtx, HistoryProvider };
