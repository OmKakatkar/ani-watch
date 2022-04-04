import { useEffect, useRef, useState } from 'react';

function useDetectClickOutside(initialState) {
	const nodeRef = useRef(null);
	const triggerRef = useRef(null);

	const [showItem, setShowItem] = useState(initialState);

	/**
	 * Close the shown item when clicked outside
	 * @function
	 * @param {Event} e
	 * @returns setter function with a false value
	 */
	const handleClickOutside = e => {
		// If click is on trigger(can be a button), toggle item
		if (triggerRef.current && triggerRef.current.contains(e.target)) {
			return setShowItem(!showItem);
		}

		// If item is open and click is outside of item, close item
		if (nodeRef.current && !nodeRef.current.contains(e.target)) {
			return setShowItem(false);
		}
	};

	useEffect(() => {
		document.addEventListener('click', handleClickOutside, true);
		return () => {
			document.removeEventListener('click', handleClickOutside, true);
		};
	});

	return {
		triggerRef,
		nodeRef,
		showItem,
		setShowItem
	};
}
export default useDetectClickOutside;
