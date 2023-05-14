import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import RootLayout from "../layout/rootLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Landing from "../pages/landing";
import HomeLayout from "../layout/HomeLayout";
import HomePage from "../pages/HomePage";

let router = createBrowserRouter(
	createRoutesFromElements(
		<Route>
			<Route path="/" element={<RootLayout />}>
				<Route index element={<Landing />} />
				<Route path="login" element={<Login />} />
				<Route path="register" element={<Register />} />
			</Route>
			<Route element={<HomeLayout />}>
				<Route path="/learn">
					<Route index element={<HomePage />} />
				</Route>

				<Route path="/profile"></Route>
				<Route path="/quiz"></Route>
				<Route path="/forum"></Route>
				<Route path="/collections"></Route>
			</Route>
		</Route>
	)
);
function App() {
	return <RouterProvider router={router} />;
}

export default App;
