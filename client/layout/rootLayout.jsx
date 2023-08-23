import { Outlet } from "react-router-dom";
import Header from "../components/Misc/Header";

export default function RootLayout() {
  const headerData = {
    brand: {
      name: "Lumin",
      linkTo: "/",
    },
    pages: [
      {
        name: "Login",
        linkTo: "/login",
      },
      {
        name: "Sign Up",
        linkTo: "/register",
      },
    ],
  };
  return (
    <div className="root-layout">
      <Header headerData={headerData} />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
