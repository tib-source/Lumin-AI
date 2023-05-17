export default function Question({ question, type, answer, choices, index }) {
	const handleClick = (e) => {
		const button = e.target;
		if (answer.toString().toLowerCase() == button.textContent.toLowerCase()) {
			button.style.background = "green";
		}
	};
	const generate = (type) => {
		let questionHTML;
		switch (type) {
			case "trueFalse":
				console.log(question);
				questionHTML = (
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
				return questionHTML;
			case "multipleChoice":
				question = (
					<div className="question">
						<p>
							{index}. {question}
						</p>
						<div className="answers">
							{choices.map((ans, i) => {
								return (
									<button onClick={handleClick} key={i}>
										{ans}
									</button>
								);
							})}
						</div>
					</div>
				);
				return question;
			case "fillBlank":
				break;
			default:
				question = "Error Generating the Questions";
		}
		if (type == "trueFalse") {
			return;
		}
	};
	return <div className="questionCard">{generate(type)}</div>;
}
