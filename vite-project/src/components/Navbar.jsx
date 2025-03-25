import { NavLink } from "react-router-dom";
import "./Navbar.css";
export const Navbar = () => {
  return (
    <>
      <header>
        <div className="container">
          <div className="logo-brand"></div>
          <NavLink to="/">This is test</NavLink>
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact Us</NavLink>
              </li>
              <li>
                <NavLink to="/services">Sevices</NavLink>
              </li>
              <li>
                <NavLink to="/register">Register</NavLink>
              </li>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
