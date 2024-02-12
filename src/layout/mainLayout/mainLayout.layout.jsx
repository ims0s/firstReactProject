import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/Footer.component.jsx";
import Navbar from "../../components/navbar/Navbar.component.jsx";

function MainLayout() {
    return (
        <>
            <Navbar />

            <main className="bg-main text-center d-flex align-items-center   min-vh-100  ">
                <Outlet/>
            </main>

            <Footer/>


        </>
    );
}

export default MainLayout;