import axios from "axios";
import react, { useEffect, useState } from "react";

const Search = () => {
	const [term, setTerm] = useState("programming");
	const [results, setResults] = useState([]);

	useEffect(() => {
		const search = async () => {
			const { data } = await axios.get(
				"https://en.wikipedia.org/w/api.php",
				{
					params: {
						action: "query",
						list: "search",
						origin: "*",
						format: "json",
						srsearch: term, //^ term cannot be empty
					},
				}
			);

			setResults(data.query.search);
		};

		//* if rendering for the first time
		if (term && !results.length) search();
		else {
			const timerId = setTimeout(() => {
				if (term) search();
			}, 1000);

			return () => {
				clearTimeout(timerId);
			};
		}
	}, [term]);

	const renderedresults = results.map((result) => {
		return (
			<div className="item" key={result.pageid}>
				<div className="right floated content">
					<a
						href={`https://en.wikipedia.org?curid=${result.pageid}`}
						className="ui button"
					>
						Go
					</a>
				</div>
				<div className="content">
					<div className="header">{result.title}</div>
					<span
						dangerouslySetInnerHTML={{ __html: result.snippet }}
					></span>
				</div>
			</div>
		);
	});

	return (
		<div>
			<div className="ui form">
				<div className="field">
					<label>Enter Search Term:</label>
					<input
						value={term}
						onChange={(e) => setTerm(e.target.value)}
						className="input"
					/>
				</div>
			</div>
			<div className="ui celled list">{renderedresults}</div>
		</div>
	);
};

export default Search;
