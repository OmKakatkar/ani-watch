import './List.css';
import { useAuth } from '../../context/auth-context';

function List({ menuList, videoData }) {
	const { user } = useAuth();
	return (
		<ul>
			{menuList &&
				menuList.map(({ id, icon, buttonText, handleClick }) => (
					<li key={id} className="list-list-item">
						<button
							className="list-item-link text-white"
							onClick={() => handleClick(user.token, videoData)}
						>
							<div className="text-left">
								{icon}
								<span>{buttonText}</span>
							</div>
						</button>
					</li>
				))}
		</ul>
	);
}
export default List;
