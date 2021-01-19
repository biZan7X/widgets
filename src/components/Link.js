import react from "react";

const Link = ({ className, href, children }) => {
	const onClick = (event) => {
		if (event.metaKey || event.ctrlKey) return; //* if ctrl is on , just do the natural thing

		event.preventDefault();
		window.history.pushState({}, "", href);

		const navEvent = new PopStateEvent("popstate"); //^ creating the event
		window.dispatchEvent(navEvent); //^exporting the event
	};
	return (
		<a onClick={onClick} className={className} href={href}>
			{children}
		</a>
	);
};

export default Link;
