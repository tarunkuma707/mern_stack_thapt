import { NavLink } from "react-router-dom"
import Contact from "./Contact"

export const Error = () => {
    return <>
            <section id="error-page">
                <div className="content">
                    <h2 className="header">404</h2>
                    <h4>The page you are looking is not found.</h4>
                </div>
                <p>
                    Opps! The page you trying to access doesn't exist.
                </p>
                <div className="btns">
                    <NavLink to="/"> Home </NavLink>
                    <NavLink to="/contact"> Contact </NavLink>
                </div>
            </section>
            </>
}