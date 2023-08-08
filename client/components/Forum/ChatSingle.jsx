export default function ChatSingle({ left, textContent }) {
	return (
		<div
			className="chat__chatSingle"
			style={{
				clear: "both",
				flexDirection: left ? "row" : "row-reverse",
				float: left ? "" : "right",
			}}
		>
			<div className="chatSingle__icon">
				<img src="https://placehold.co/45x45" alt="profile picture" />
			</div>
			<div
				className="chatSingle__content"
				style={{
					backgroundColor: left ? "var(--teritary_second)" : "var(--teritary)",
				}}
			>
				<span> {textContent || "What is good fellas"}</span>
			</div>
		</div>
	);
}
