import react from "react";
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
	return (
		<div>
			<Dropdown options={options} />
		</div>
	);
};
