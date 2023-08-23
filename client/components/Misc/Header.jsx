/* eslint-disable react/prop-types */
import { NavLink, Link } from "react-router-dom";
export default function Header({ headerData: { brand, pages } }) {
  return (
    <header>
      <nav className="home__navbar">
        <h1>
          <Link className="navbar__header" to={brand?.linkTo}>
            {brand?.name}
          </Link>
        </h1>
        <div className="navbar__links">
          {pages.map((page, i) => {
            return (
              <NavLink key={i} className="nav" to={page?.linkTo}>
                {page?.name}
              </NavLink>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
