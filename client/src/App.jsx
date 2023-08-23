import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "../layout/rootLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import Landing from "../pages/landing";
import HomeLayout from "../layout/HomeLayout";
import HomePage from "../pages/HomePage";
import Quiz from "../components/Quiz/Quiz";
import ForumPage from "../pages/Forum/ForumPage";
import Games from "../components/Games/Games";

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
        <Route path="/games" element={<Games />}></Route>

        <Route path="/profile"></Route>
        <Route path="/quiz" element={<Quiz />} />

        <Route path="/forum">
          <Route index element={<ForumPage />} />
          {/* <Route path="/:id" /> */}
        </Route>
        <Route path="/collections"></Route>
      </Route>
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
