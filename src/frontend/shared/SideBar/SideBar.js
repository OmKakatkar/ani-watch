import {
	faHistory,
	faHome,
	faArrowDownShortWide,
	faClock,
	faThumbsUp
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import './SideBar.css';
function SideBar() {
	return (
		<div className="sidebar">
			<div className="sidebar-spacer"></div>
			<div className="sidebar-content">
				<nav className="sidebar-inner-content">
					<ul className="sidebar-list">
						<li className="sidebar-list-item">
							<NavLink to="/" className="sidebar-item-link text-white">
								<FontAwesomeIcon icon={faHome} className="text-lg" />
								<span>Home</span>
							</NavLink>
						</li>
						<li className="sidebar-list-item">
							<NavLink to="/history" className="sidebar-item-link text-white">
								<FontAwesomeIcon icon={faHistory} className="text-lg" />
								<span>History</span>
							</NavLink>
						</li>
						<li className="sidebar-list-item">
							<NavLink to="/likes" className="sidebar-item-link text-white">
								<FontAwesomeIcon icon={faThumbsUp} className="text-lg" />
								<span>Liked Videos</span>
							</NavLink>
						</li>
						<li className="sidebar-list-item">
							<NavLink
								to="/watchlater"
								className="sidebar-item-link text-white"
							>
								<FontAwesomeIcon icon={faClock} className="text-lg" />
								<span>Watch Later</span>
							</NavLink>
						</li>
						<li className="sidebar-list-item">
							<NavLink to="/playlist" className="sidebar-item-link text-white">
								<FontAwesomeIcon
									icon={faArrowDownShortWide}
									className="text-lg"
								/>
								<span>Playlist</span>
							</NavLink>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
}

export default SideBar;
