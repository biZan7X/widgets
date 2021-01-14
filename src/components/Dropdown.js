import react, { useState } from "react";

const Dropdown = ({ options, selected, onSelectedChange }) => {
	const [open, SetOpen] = useState(false);
	const renderedOptions = options.map((option) => {
		if (option.value === selected.value) return null; //^conditional rendering

		return (
			<div
				onClick={() => onSelectedChange(option)}
				key={option.value}
				className="item"
			>
				{option.label}
			</div>
		);
	});

	return (
		<div className="ui form">
			<div className="field">
				<label className="label">Selecta color</label>
				<div
					onClick={() => SetOpen(!open)}
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
