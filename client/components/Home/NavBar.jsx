import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
	return (
		<div className="home__navbar">
			<h1>
				<Link className="navbar__header" to="/learn">
					Lumin
				</Link>
			</h1>
			<NavLink className="nav" to="/learn">
				Learn
			</NavLink>
			<NavLink className="nav" to="/forum">
				Forums
			</NavLink>
			<NavLink className="nav" to="profile">
				Profile
			</NavLink>
		</div>
	);
}
