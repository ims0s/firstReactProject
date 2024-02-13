import { useState } from "react";
import image1 from "../../assets/images/port1.png"
import image2 from "../../assets/images/port2.png"
import image3 from "../../assets/images/port3.png"
import PortfolioImage from "../portfolioImage/PortfolioImage.component";
import Modal from "../modal/Modal.component";
function Portfolio() {
    let images = [image1,image2,image3,image1,image2,image3]
    const [currentImage,setCurrentImage]=useState(image1)
    return (
        <div className="bg-white py-5   min-vh-100  w-100 ">
            <div className="container">
                <h2 className="text-uppercase mt-5  fw-bolder ">Portfolio component</h2>
                <div className="d-flex justify-content-center align-items-center py-3">
                    <div className="bg-dark white-line me-3 "> </div>
                    <i className="fa-solid fa-star fs-5" />
                    <div className="bg-dark  white-line ms-3 "></div>
                </div>
                <div className="row g-3 ">
                    {images.map((element , index)=>{
                        return(
                            <PortfolioImage setCurrentImage={setCurrentImage} image={element} key={index} />
                        )
                    })}
                    
                </div>
            </div>
            <Modal image={currentImage} />
        </div>
    );
}

export default Portfolio;