function Modal(porps) {
    const {image}=porps
    return (
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog p-0  modal-dialog-centered">
                <div class="modal-content">
                    
                    <div class="modal-body p-0 rounded-3 overflow-hidden ">
                        <img src={image} className="w-100 " alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;

