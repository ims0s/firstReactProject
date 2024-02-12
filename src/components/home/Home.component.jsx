import avatar from "../../images/avataaars.svg"
function Home() {
    return (
        <div className="d-flex justify-content-center align-items-center py-5 text-white  container ">
            <div>
                <img className="w-100 " src={avatar} alt="avatar" />
                <p className="fw-bolder fs-1 text-uppercase text-white ">start framework</p>
                <div className="d-flex justify-content-center align-items-center ">
                    <div className="white-line me-3 "> </div>
                    <i className="fa-solid fa-star fs-5" />
                    <div className="white-line ms-3 "></div>
                </div>
                    <p>Graphic Artist - Web Designer - Illustrator</p>
            </div>

        </div>
    );
}

export default Home;