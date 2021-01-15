import react, { useEffect, useRef, useState } from "react";

const Dropdown = ({ options, selected, onSelectedChange }) => {
	const [open, SetOpen] = useState(false);
	const ref = useRef();

	useEffect(() => {
		const onBodyClick = (event) => {
			console.log("one");
			if (ref.current.contains(event.target)) return;
			SetOpen(false);
		};
		document.body.addEventListener("click", onBodyClick);

		return () => {
			console.log("two");
			document.body.removeEventListener("click", onBodyClick);
		};
	}, []);

	const renderedOptions = options.map((option) => {
		if (option.value === selected.value) return null; //^conditional rendering

		return (
			<div
				onClick={() => {
					onSelectedChange(option);
				}}
				key={option.value}
				className="item"
			>
				{option.label}
			</div>
		);
	});

	return (
		<div ref={ref} className="ui form">
			<div className="field">
				<label className="label">Selecta color</label>
				<div
					onClick={() => {
						SetOpen(!open);
					}}
					className={`ui selection dropdown ${
						open ? "visible active" : ""
					} `}
				>
					<i className="dropdown icon"></i>
					<div className="text">{selected.label}</div>
					<div className={`menu ${open ? "visible transition" : ""}`}>
						{renderedOptions}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dropdown;
