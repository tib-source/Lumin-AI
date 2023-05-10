import SideBar from "../components/Home/SideBar";
import ContentMain from "../components/Home/ContentMain";

export default function HomePage() {
	return (
		<div className="home__main">
			<ContentMain />
			<SideBar />
		</div>
	);
}
