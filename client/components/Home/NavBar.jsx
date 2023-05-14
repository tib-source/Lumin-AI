import { NavLink } from "react-router-dom";

export default function NavBar() {
	return (
		<div className="home__navbar">
			<h1>Lumin</h1>
			<NavLink to="/learn">Learn</NavLink>
			<NavLink to="/forum">Forums</NavLink>
			<NavLink to="profile">Profile</NavLink>
		</div>
	);
}
