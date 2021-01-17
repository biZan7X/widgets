import axios from "axios";
import react, { useEffect, useState } from "react";

const Convert = ({ text, language }) => {
	const [translated, setTranslated] = useState("");

	useEffect(() => {
		const doTranslation = async () => {
			const { data } = await axios.post(
				"https://translation.googleapis.com/language/translate/v2",
				{},
				{
					params: {
						q: text,
						target: language.value,
						key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
					},
				}
			); //^ this does not want the queries with the bodu but wants them as a string, so the second para is goin empty
			setTranslated(data.data.translations[0].translatedText);
		};

		doTranslation();
	}, [text, language]);

	return (
		<div>
			<h1 className="ui header">{translated}</h1>
		</div>
	);
};

export default Convert;
