export default function PostContainer() {
	return (
		<div className="sidebar__postContainer">
			<div className="postContainer__icon">
				<img src="https://placehold.co/75x75" alt="" />
			</div>
			<div className="postContainer__content">
				<span className="postContainer__date">yesterday</span>

				<p>Lorem ipsum dolor sit amet consectetur...</p>
				<p className="text">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi,
					illum!
				</p>
				<div className="postContainer__info">
					<span>24 likes</span>
				</div>
			</div>
		</div>
	);
}
