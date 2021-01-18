import react, { useState } from "react";
import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import Search from "./components/Search";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

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
	const [selected, setSelected] = useState(options[0]);
	return (
		<div>
			<Header />

			<Route path="/">
				<Accordion items={items} />
			</Route>

			<Route path="/lists">
				<Search />
			</Route>

			<Route path="/dropdown">
				<Dropdown
					options={options}
					selected={selected}
					onSelectedChange={setSelected}
					label="colors"
				/>
			</Route>

			<Route path="/translate">
				<Translate />
			</Route>
		</div>
	);
};
