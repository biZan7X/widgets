import react, { useState } from "react";
import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import Search from "./components/Search";

const items = [
	{
		title: "who is bizan ?",
		content: "He is the coolest guy",
	},
	{
		title: "what is the real name of bizan ?",
		content: "it is biswanath",
	},
	{
		title: "which the best food in the world ?",
		content: "It is noodles!",
	},
];

const options = [
	{
		label: "the color is red",
		value: "red",
	},
	{
		label: "the color is green",
		value: "green",
	},
	{
		label: "the color is blue",
		value: "blue",
	},
];

export default () => {
	const [selected, Setselected] = useState(options[0]);
	const [showDropDown, setShowDropDown] = useState(true);

	return (
		<div>
			<button onClick={() => setShowDropDown(!showDropDown)}>
				Toggle Drop down
			</button>

			{showDropDown ? (
				<Dropdown
					selected={selected}
					onSelectedChange={Setselected}
					options={options}
				/>
			) : null}
		</div>
	);
};
