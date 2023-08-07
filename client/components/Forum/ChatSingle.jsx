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
				<img src="https://placehold.co/55x55" alt="profile picture" />
			</div>
			<div
				className="chatSingle__content"
				style={{
					backgroundColor: left ? "var(--teritary)" : "var(--teritary_second)",
				}}
			>
				<span> {textContent || "What is good fellas"}</span>
			</div>
		</div>
	);
}