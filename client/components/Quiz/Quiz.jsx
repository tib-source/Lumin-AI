/* eslint-disable no-mixed-spaces-and-tabs */
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Question from "./Question";

export default function Quiz() {
	let { state } = useLocation();
	const [correctAns, setCorrectAns] = useState(0);
	const [questions, setQuestions] = useState([]);
	const { topic, difficulty, qtype } = state;
	const questionTypes = {
		trueFalse: "True or False",
		multipleChoice: "Multiple Choice",
		fillBlank: "Fill the Blank",
	};

	const raw = JSON.stringify({
		ammount: "10",
		topic,
		level: difficulty,
	});

	useEffect(() => {
		let myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");

		var requestOptions = {
			method: "POST",
			headers: myHeaders,
			body: raw,
			redirect: "follow",
		};
		fetch(`http://localhost:5000/api/questions/${qtype}`, requestOptions)
			.then((response) => response.json())
			.then((result) => {
				console.log(result);
				return setQuestions(result.questions);
			})
			.catch((error) => console.log("error", error));
	}, [state, qtype, raw]);

	const handleCorrectAns = () => {
		setCorrectAns(correctAns + 1);
	};
	return (
		<div className="quiz">
			<div className="quiz__header">
				<h1>{questionTypes[qtype]}</h1>
				<h3>{correctAns} / 10</h3>
				<p>Topic: {topic}</p>
				<p>Level: {difficulty || "undefined"}</p>
			</div>
			{!questions ? (
				<div className="loading">Loading</div>
			) : (
				questions.map(({ question, answer, choices }, index) => {
					return (
						<Question
							key={index}
							question={question}
							answer={answer}
							choices={choices || "undefined"}
							type={qtype}
							index={index + 1}
							handleCorrect={handleCorrectAns}
						/>
					);
				})
			)}
		</div>
	);
}
