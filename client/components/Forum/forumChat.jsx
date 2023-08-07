import { useState } from "react";
import ChatSingle from "./chatSingle";
import TextInput from "./TextInput";

export default function ForumChat() {
	const [data, setData] = useState([
		"Lorem ipsum dolor, sit amet cosectetur adipisicing elit. Rem, consequatur, Lorem ipsum dolor, sit amet cosectetur adipisicing elit. Rem, consequatur adsfasdf asdfas df asdfasdf ",
		"Lorem ipsum consequatur",
		"Lorem ipsum dolor, sit amet  adipisicing elit. Rem, consequatur",
		"Whats up Fellas",
		"Lorem ipsum dolor sit.",
	]);
	return (
		<div className="forum__chat">
			<div className="chat__header">
				<p>Computer Science</p>
			</div>
			<div className="chat__content">
				<ChatSingle textContent={"This is a test, test 123"} />
				{data.map((text, i) => {
					return <ChatSingle key={i} textContent={text} left={true} />;
				})}
			</div>
			<TextInput />
		</div>
	);
}
