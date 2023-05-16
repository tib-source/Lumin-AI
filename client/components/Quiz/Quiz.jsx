/* eslint-disable no-mixed-spaces-and-tabs */
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Question from "./Question";

export default function Quiz() {
	let { state } = useLocation();
	const { topic, difficulty, qtype } = state;
	const [questions, setQuestions] = useState([]);
	let myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/json");
	var raw = JSON.stringify({
		ammount: "10",
		topic,
		level: difficulty,
	});
	var requestOptions = {
		method: "POST",
		headers: myHeaders,
		body: raw,
		redirect: "follow",
	};

	useEffect(() => {
		fetch("http://localhost:5000/api/questions/trueFalse", requestOptions)
			.then((response) => response.json())
			.then((result) => setQuestions(JSON.parse(result).questions))
			.catch((error) => console.log("error", error));
	}, [state]);
	console.log(questions);
	return (
		<div className="quiz">
			<div className="quiz__header">
				<h1>True and False</h1>
				<p>Topic: {"Biology"}</p>
				<p>Level: {difficulty || "undefined"}</p>
			</div>
			{!questions ? (
				<div className="loading">Loading</div>
			) : (
				questions.map(({ question, answer }, index) => {
					return (
						<Question
							key={index}
							question={question}
							answer={answer}
							type={qtype}
							index={index + 1}
						/>
					);
				})
			)}
		</div>
	);
}
