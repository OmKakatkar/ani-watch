import { forwardRef } from 'react';
import './HoverCard.css';

const HoverCard = forwardRef(({children}, ref) => {
	return (
		<div className="hover-card text-white" ref={ref}>
			{children}
		</div>
	);
});
export default HoverCard;
