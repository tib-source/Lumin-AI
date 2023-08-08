import { useEffect, useRef, useState } from "react";
import ChatSingle from "./chatSingle";
import TextInput from "./TextInput";

export default function ForumChat() {
	const prevData = [
		"Lorem ipsum dolor, sit amet cosectetur adipisicing elit. Rem, consequatur, Lorem ipsum dolor, sit amet cosectetur adipisicing elit. Rem, consequatur adsfasdf asdfas df asdfasdf ",
		"Lorem ipsum consequatur",
		"Lorem ipsum dolor, sit amet  adipisicing elit. Rem, consequatur",
		"Whats up Fellas",
	];

	const [data, setData] = useState([]);
	const scrollRef = useRef(null);
	useEffect(() => {
		scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
	}, [data]);

	function addData(newData) {
		setData([...data, newData]);
		// TODO: fix scrolling issue.
	}
	return (
		<div className="forum__chat">
			<div className="chat__header">
				<p>Lorem ipsum dolor sit amet consectetur...</p>
			</div>
			<div className="chat__content" id="chat__content" ref={scrollRef}>
				<ChatSingle textContent={"This is a test, test 123"} />
				{prevData.map((text, i) => {
					return <ChatSingle key={i} textContent={text} left={true} />;
				})}

				{data.map((text, i) => {
					return <ChatSingle key={i} textContent={text} />;
				})}
			</div>
			<TextInput setData={addData} />
		</div>
	);
}
