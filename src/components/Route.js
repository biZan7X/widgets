import { useEffect, useState } from "react";

const React = ({ path, children }) => {
	const [currentPath, setCurrentPath] = useState(window.location.pathname);

	useEffect(() => {
		const onLocationChange = () => {
			setCurrentPath(window.location.pathname);
		};

		window.addEventListener("popstate", onLocationChange);
	}, []);

	//^when the state gets changed it forces the component to re render and hence doing the checks again.
	return currentPath === path ? children : null;
};

export default React;
