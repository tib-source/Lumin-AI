import { exampleData } from "./fillerData";
import ForumSidebar from "../../components/Forum/ForumSidebar";
import ForumChat from "../../components/Forum/forumChat";
import "./index.css";
export default function ForumPage() {
	const data = exampleData;

	return (
		<div className="forum__container">
			<ForumSidebar />
			<ForumChat />
		</div>
	);
}
