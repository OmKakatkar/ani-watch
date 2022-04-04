import { forwardRef } from 'react';
import './HoverCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faArrowDownShortWide,
	faClock
} from '@fortawesome/free-solid-svg-icons';

const HoverCard = forwardRef((props, ref) => {
	return (
		<div className="hover-card text-white" ref={ref}>
			<ul className="hover-card-list">
				<li className="hover-card-list-item">
					<button className="hover-card-item-link text-white">
						<div className="text-left">
							<FontAwesomeIcon icon={faClock} className="text-lg" />
							<span>Save to Watch Later</span>
						</div>
					</button>
				</li>
				<li className="hover-card-list-item">
					<button className="hover-card-item-link text-white">
						<div className="text-left">
							<FontAwesomeIcon
								icon={faArrowDownShortWide}
								className="text-lg"
							/>
							<span>Save to Playlist</span>
						</div>
					</button>
				</li>
			</ul>
		</div>
	);
});
export default HoverCard;
