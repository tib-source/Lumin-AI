import PropTypes from "prop-types";
import { useState } from "react";
function Question({ question, type, answer, choices, index, handleCorrect }) {
	const handleClick = (e) => {
		const button = e.target;
		button.style.color = "white";

		if (answer.toString().toLowerCase() == button.textContent.toLowerCase()) {
			button.style.background = "green";
			handleCorrect();
		} else {
			button.style.background = "red";
		}

		setDisabled(true);
	};

	const [isDisabled, setDisabled] = useState(false);

	const generate = (type) => {
		let questionHTML;
		switch (type) {
			case "trueFalse":
				questionHTML = (
					<div className="question">
						<p>
							{index}. {question}
						</p>
						<div className="answers">
							<button disabled={isDisabled} onClick={handleClick}>
								True
							</button>
							<button disabled={isDisabled} onClick={handleClick}>
								False
							</button>
						</div>
					</div>
				);
				break;
			case "multipleChoice":
				questionHTML = (
					<div className="question">
						<p>
							{index}. {question}
						</p>
						<div className="answers">
							{choices.map((ans, i) => {
								return (
									<button disabled={isDisabled} onClick={handleClick} key={i}>
										{ans}
									</button>
								);
							})}
						</div>
					</div>
				);
				break;
			case "fillBlank":
				let tempQuestion = question.split("%s");

				questionHTML = (
					<div className="question">
						<p>
							{index}. {tempQuestion[0]}
							<input
								disabled={isDisabled}
								type="text"
								name="answer"
								id="qAns"
							/>
							{tempQuestion[1]}
						</p>
					</div>
				);
				break;
			default:
				questionHTML = "Error Generating the Questions";
				break;
		}

		return questionHTML;
	};
	return <div className="questionCard">{generate(type)}</div>;
}

Question.propTypes = {
	index: PropTypes.number.isRequired,
	choices: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
	answer: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
	question: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	handleCorrect: PropTypes.func.isRequired,
};

export default Question;
