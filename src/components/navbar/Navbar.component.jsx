import { Link, NavLink } from "react-router-dom";


export default function Navbar(props) {


    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-bg navbar-dark nav-pos">
                <div className="container">
                    <Link to="/" className="navbar-brand fw-bolder fs-1">Start Framework</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fw-bolder fs-5 text-uppercase ">
                            <li className="nav-item">
                                <NavLink className="nav-link text-white rounded-3  nav-link-active" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link text-white rounded-3  nav-link-active" to="/portfolio">Portfolio</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link text-white rounded-3  nav-link-active" to="/contact">contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}