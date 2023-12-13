import { Link, NavLink } from "react-router-dom";
import RoutesIndex from "../../routes";
import { Fragment } from "react";

const Navbar = () => {
  return (
    <Fragment>
      <nav
        className="sticky-top navbar navbar-expand-lg bg-dark"
        data-bs-theme="dark"
      >
        <div className="container">
          <Link to="/" className="navbar-brand">
            React CRUD
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link" aria-current="page">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/posts" className="nav-link" aria-current="page">
                  Posts
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <RoutesIndex />
    </Fragment>
  );
};

export default Navbar;
