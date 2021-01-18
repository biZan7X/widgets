const React = ({ path, children }) => {
	return window.location.pathname === path ? children : null;
};

export default React;
