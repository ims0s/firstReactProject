import avatar from "../../images/avataaars.svg"
function Home() {
    return ( 
        <>
        <div className="w-25 ">
            <img src={avatar} alt="" />
        </div>
            <p className="fw-bolder fs-1 text-uppercase text-white ">start framework</p>
        </>
     );
}

export default Home;