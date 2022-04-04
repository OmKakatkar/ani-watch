import {
	faArrowDownShortWide,
	faClock
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { addToWatchLater } from '../utils/watchlater-request';

export const homeMenu = [
	{
		id: '1',
		icon: <FontAwesomeIcon icon={faClock} className="text-lg" />,
		buttonText: 'Save to Watch Later',
		handleClick: addToWatchLater
	},
	{
		id: '2',
		icon: <FontAwesomeIcon icon={faArrowDownShortWide} className="text-lg" />,
		buttonText: 'Save to Playlist',
		handleClick: () => console.log('FIXME: Connect to Play List')
	}
];
