import { Outlet } from "react-router-dom";
import Header from "../components/Misc/Header";
export default function HomeLayout() {
  const headerData = {
    brand: {
      name: "Lumin",
      linkTo: "/learn",
    },
    pages: [
      {
        name: "Learn",
        linkTo: "/learn",
      },
      {
        name: "Forum",
        linkTo: "/forum",
      },
      {
        name: "Games",
        linkTo: "/games ",
      },
      {
        name: "Profile",
        linkTo: "/profile",
      },
    ],
  };
  return (
    <div className="home">
      <Header headerData={headerData} />
      <Outlet />
    </div>
  );
}
