import { useNavigate } from "react-router-dom";

export default function ContentMain() {
	const navigate = useNavigate();
	function handleSubmit(e) {
		e.preventDefault();
		const topic = e.target[0].value;
		const qtype = e.target[1].value;
		const difficulty = e.target[2].value;
		console.log("meow");
		navigate(`/quiz`, {
			state: {
				topic,
				qtype,
				difficulty,
			},
		});
	}
	return (
		<div className="home__main__middle flex">
			<h1>Luminator</h1>
			<form className="home__main__form" onSubmit={handleSubmit}>
				<label htmlFor="topic">
					<span>Topic to Explore:</span>
					<input id="topic" name="topic" type="text" required />
				</label>
				<label htmlFor="qtype">
					<span>Type of Question:</span>
					<select name="qtype" id="qtype">
						<option value={"trueFalse"}>True or False</option>
						<option value={"fillBlank"}>Fill the blank</option>
						<option value={"multipleChoice"}>Multiple Choice</option>
						<option value={"shortAns"}>Short Answers</option>
					</select>
				</label>

				<label htmlFor="qtype">
					<span>Question Dificulty:</span>
					<select name="qtype" id="qtype">
						<option value={"Primary School"}>Primary School</option>
						<option value={"Secondary School"}>Secondary School</option>
						<option value={"Sixth Form/Advanced Secondary"}>
							Advanced Secondary
						</option>
						<option value={"Undergraduate"}>Undergraduate</option>
						<option value={"Postgraduate"}>Postgraduate</option>
						<option value={"PHD"}>PHD</option>
					</select>
				</label>

				<button type="submit">Generate</button>
			</form>
		</div>
	);
}
