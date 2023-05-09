import { NavLink, Outlet } from "react-router-dom";

export default function RootLayout() {
	return (
		<div className="root-layout">
			<header>
				<nav>
					<h1>Lumin</h1>
					<NavLink to="/login">Login</NavLink>
					<NavLink to="/register">Sign Up</NavLink>
				</nav>
			</header>
			<main>
				<Outlet />
			</main>
		</div>
	);
}
