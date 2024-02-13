function Footer() {


    return (

        <footer className="bg-alter text-white  ">
            <div className="container">
                <div className="row g-3  py-5">
                    <div className="col-sm-4 text-center">
                        <h3 className="text-uppercase ">location</h3>
                        <p>2215 John Daniel Drive</p>
                        <p>Clark, MO 65243</p>
                    </div>
                    <div className="col-sm-4 text-center">
                        <h3 className="text-uppercase ">Around the web</h3>
                        <div className="d-flex flex-wrap  justify-content-around  ">
                            <div className="icon-container border-1 border-white ">
                                <i className="fa-brands fa-facebook"></i>
                            </div>
                            <div className="icon-container">
                                <i className="fa-brands fa-twitter"></i>
                            </div>
                            <div className="icon-container">
                                <i className="fa-brands fa-linkedin"></i>
                            </div>
                            <div className="icon-container">
                                <i className="fa-solid fa-globe"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 text-center">
                        <h3 className="text-uppercase ">about freelancer</h3>
                        <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                    </div>
                </div>

            </div>
            <p className="p-4 m-0  text-center bg-dark ">
            Copyright © Your Website 2021
            </p>
        </footer>

    );
}

export default Footer;