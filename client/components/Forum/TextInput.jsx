export default function TextInput() {
	return (
		<div className="chat__input">
			<input type="text" name="message" id="message" />
			<button type="submit">Send</button>
		</div>
	);
}
