function PortfolioImage(props) {
    const {image , setCurrentImage}=props;
    return (
        <div onClick={()=>{setCurrentImage(image)}} className="col-md-4" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <div className="position-relative overflow-hidden rounded-3 ">
                <img src={image} className="w-100 " alt="" />
                <div className="hover-image bg-main">
                    <i className="fa-solid fa-plus  "></i>
                </div>
            </div>
        </div>
    );
}

export default PortfolioImage;