import { Outlet } from "react-router-dom";
import NavBar from "../components/Home/NavBar";

export default function HomeLayout() {
	return (
		<div className="home">
			<NavBar />
			<Outlet />
		</div>
	);
}
