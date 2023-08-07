import PostContainer from "./PostContainer";

export default function ForumSidebar() {
	return (
		<div className="forum__sidebar">
			<div className="sidebar__title">
				<h3>Recent Posts</h3>
			</div>
			<div className="sidebar__postList">
				<PostContainer />
				<PostContainer />
				<PostContainer />
				<PostContainer />
				<PostContainer />
				<PostContainer />
			</div>
		</div>
	);
}
