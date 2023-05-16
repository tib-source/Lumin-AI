export default function Question({ question, type, answer, index }) {
	const handleClick = (e) => {
		const button = e.target;

		console.log(answer);
		console.log(button.textContent);
		if (answer.toString() == button.textContent.toLowerCase()) {
			button.style.background = "green";
		}
	};
	console.log(type);
	const generate = (type) => {
		if (type == "trueFalse") {
			return (
				<div className="question">
					<p>
						{index}. {question}
					</p>
					<div className="answers">
						<button onClick={handleClick}>True</button>
						<button onClick={handleClick}>False</button>
					</div>
				</div>
			);
		}
	};
	return <div className="questionCard">{generate(type)}</div>;
}
