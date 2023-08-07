import ChatSingle from "./chatSingle";
import TextInput from "./TextInput";

export default function ForumChat() {
	return (
		<div className="forum__chat">
			<div className="chat__header">
				<p>Computer Science</p>
			</div>
			<div className="chat__content">
				<ChatSingle left={true} />
				<ChatSingle
					textContent={
						"Lorem ipsum dolor, sit amet cosectetur adipisicing elit. Rem, consequatur, Lorem ipsum dolor, sit amet cosectetur adipisicing elit. Rem, consequatur adsfasdf asdfas df asdfasdf "
					}
				/>
				<ChatSingle textContent={"Lorem ipsum consequatur"} />
				<ChatSingle />
				<ChatSingle
					textContent={
						"Lorem ipsum dolor, sit amet  adipisicing elit. Rem, consequatur"
					}
				/>{" "}
				<ChatSingle
					textContent={"Lorem ipsum doloradipisicing elit. Rem, consequatur"}
				/>{" "}
				<ChatSingle />
			</div>
			<div className="chat__input">
				<TextInput />
			</div>
		</div>
	);
}
