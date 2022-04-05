import {
	faArrowDownShortWide,
	faClock,
	faTrash
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { addToWatchLater } from '../utils/watchlater-request';
import { removeFromWatchLater } from '../utils/watchlater-request';

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

export const watchLaterMenu = [
	{
		id: '1',
		icon: <FontAwesomeIcon icon={faArrowDownShortWide} className="text-lg" />,
		buttonText: 'Save to Playlist',
		handleClick: () => console.log('FIXME: Connect to Play List')
	},
	{
		id: '2',
		icon: <FontAwesomeIcon icon={faTrash} className="text-lg" />,
		buttonText: 'Remove from Watch Later',
		handleClick: removeFromWatchLater
	}
];
