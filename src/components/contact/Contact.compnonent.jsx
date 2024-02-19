import { useFormik } from "formik";


function Contact() {

    const contact = useFormik({
        initialValues: {
            userName:'',
            userAge:'',
            userEmail:'',
            userPassword:'',
        },
        onSubmit: () => {
            
        }
    })

    return (
        <>
            <div className="bg-white vh-100 w-100">
                <div className="container py-5 ">
                    <h2 className="text-uppercase mt-5  fw-bolder ">contact component</h2>
                    <div className="d-flex justify-content-center align-items-center py-3">
                        <div className="bg-dark white-line me-3 "> </div>
                        <i className="fa-solid fa-star fs-5" />
                        <div className="bg-dark  white-line ms-3 "></div>
                    </div>
                    <form onSubmit={contact.handleSubmit} className="text-start">
                        <div className="row mt-5 text-start g-3 ">
                            <div className="offset-md-3  col-md-6 ">
                                <label htmlFor="" className={`form-label ${contact.values.userName?'':"label-hide"}  label`}>userName</label>
                                <input value={contact.values.userName} onChange={contact.handleChange} type="text" placeholder="userName" name="userName" className="form-control" />
                            </div>
                            <div className="offset-md-3  col-md-6">
                                <label htmlFor="" className={`form-label ${contact.values.userAge?'':"label-hide"}  label`}>userAge</label>
                                <input value={contact.values.userAge} onChange={contact.handleChange} type="number" placeholder="userAge" name="userAge" className="form-control" />
                            </div>
                            <div className="offset-md-3  col-md-6">
                                <label htmlFor="" className={`form-label ${contact.values.userEmail?'':"label-hide"}  label`}>userEmail</label>
                                <input value={contact.values.userEmail} onChange={contact.handleChange} type="email" placeholder="userEmail" name="userEmail" className="form-control" />
                            </div>
                            <div className="offset-md-3  col-md-6">
                                <label htmlFor="" className={`form-label ${contact.values.userPassword?'':"label-hide"}  label`}>userPassword</label>
                                <input value={contact.values.userPassword} onChange={contact.handleChange} type="password" placeholder="userPassword" name="userPassword" className="form-control" />
                            </div>

                        </div>
                        <button onClick={contact.handleReset} className="btn bg-main mt-3 offset-md-3  ">send message </button>
                    </form>

                </div>
            </div>
        </>
    );
}

export default Contact;