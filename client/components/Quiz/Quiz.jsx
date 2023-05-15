import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Quiz() {
	let { state } = useLocation();
	const { topic, difficulty, qtype } = state;
	const [questions, setQuestions] = useState({});
	let myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/json");
	var raw = JSON.stringify({
		ammount: "10",
		topic: "Computer Science - Algorithms and Data Structure",
		level: "undergraduate - second year",
	});
	var requestOptions = {
		method: "POST",
		headers: myHeaders,
		body: raw,
		redirect: "follow",
	};

	console.log(questions);
	useEffect(() => {
		fetch("http://localhost:5000/api/questions/trueFalse", requestOptions)
			.then((response) => response.text())
			.then((result) => setQuestions(JSON.parse(result)))
			.catch((error) => console.log("error", error));
	}, [state]);
	return <div>meow</div>;
}
