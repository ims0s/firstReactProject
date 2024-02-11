

export default function Navbar(props) {


    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-bg navbar-dark nav-pos">
                <div className="container">
                    <a className="navbar-brand fw-bolder fs-1" href="#">Start Framework</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fw-bolder fs-5 text-uppercase ">
                            <li className="nav-item">
                                <a className="nav-link text-white rounded-3  nav-link-active active" aria-current="page" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white rounded-3  nav-link-active " href="#">Portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white rounded-3  nav-link-active " href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}