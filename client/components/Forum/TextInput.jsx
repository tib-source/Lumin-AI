export default function TextInput({ setData }) {
	const handleSubmit = (e) => {
		try {
			e.preventDefault();
			const message = e.target[0].value;
			if (message) {
				setData(message);
			}
			e.target.reset();
		} catch (e) {
			console.log(e);
		}
	};
	return (
		<form onSubmit={handleSubmit} className="chat__input">
			<input type="text" name="message" id="message" />
			<button type="submit">Send</button>
		</form>
	);
}
