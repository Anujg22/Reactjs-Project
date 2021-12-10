import React from 'react'
// import img5 from './images/contact.jpg'
const Contact = () => {
    return (
        <>
            {/* <div className = "container-fluid">
                <div className = "row">
                    <div className = "col-md-12 mt-4">
                        <img src = {img5} alt = "vecv" width = "100%" />
                    </div>
                </div>
            </div> */}
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center mt-4 mb-5">
                        <h1 className="text-center text-primary font-weight-bold">Contact Us</h1>
                        <p>To request information or to drop us quick notes, fill out the form given below and submit.</p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <form className="row g-3 needs-validation" novalidate>

                            {/* <div className="row mb-4">
                                <div className="col-12 col-lg-6">
                                    <input type="text" id="name" name="Fname" className="form-control" placeholder="Enter your First Name" />

                                </div>

                                <div className="col-12 col-lg-6">
                                    <input type="text" id="name" name="Lname" className="form-control" placeholder="Enter your Last Name" />
                                </div>
                            </div> */}

                            <div className="row mb-4">
                                <div className="col-12">
                                    <div className="input-group text-center">
                                        <span className="input-group-text">First and Last name</span>
                                        <input type="text" aria-label="First name" className="form-control" id="validationCustom01" placeholder="Enter your First Name" required />
                                        <input type="text" aria-label="Last name" className="form-control" id="validationCustom01" placeholder="Enter your Last Name" required />
                                        <div className="valid-feedback">
                                            Looks good!
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row mb-4">
                                <div className="col-12 col-lg-6">
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Enter your Email" aria-label="Recipient's username" aria-describedby="basic-addon2" required />
                                        <span className="input-group-text" id="basic-addon2">@example.com</span>
                                    </div>

                                </div>

                                <div className="col-12 col-lg-6">
                                    <input type="text" id="mobile" name="phone" className="form-control" placeholder="Enter your Phone Number" required />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 mb-4">
                                    {/* <input type = "text" name = "contact" id = "cont" placeholder = "Contact us for" /> */}
                                    <div className="input-group mb-3">
                                        <select className="form-select" id="inputGroupSelect02">
                                            <option selected>Contact Us for</option>
                                            <option value="1">Product & Price</option>
                                            <option value="2">Services</option>
                                            <option value="3">New Dealership</option>
                                            <option value="3">International Business</option>
                                            <option value="3">Non-Automotive Engines</option>
                                            <option value="3">Investor relations</option>
                                            <option value="3">Media</option>
                                            <option value="3">Careers</option>
                                        </select>
                                        <label className="input-group-text" for="inputGroupSelect02">Options</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 mb-4">
                                    <div class="form-floating">
                                        <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                                        <label for="floatingTextarea">Leave a message here</label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-3">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                                    <label className="form-check-label" for="invalidCheck">
                                        Agree to terms and conditions
                                    </label>
                                    <div className="invalid-feedback">
                                        You must agree before submitting.
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mb-5 mt-5">
                                <button className="btn btn-primary" type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-4 mt-5 mb-5">
                        <h6>REGISTERED OFFICE</h6>
                        <p>3rd Floor - Select Citywalk,
                            A-3 District Centre, Saket,
                            New Delhi - 110 017</p>
                    </div>
                    <div className="col-md-4 mt-5 mb-5">
                        <h6>CORPORATE HEADQUARTERS</h6>
                        <h6>VE Commercial Vehicles Limited</h6>
                        <p># 96, Sector 32,
                            Gurgaon - 122 001,
                            Haryana, India
                            Telephone No: +91-124-4415600
                            Email: contact@eicher.in</p>
                    </div>
                    <div className="col-md-4 mt-5 mb-5">
                        <h6>PRESS CONTACT</h6>
                        <h6>Ms Disha Sharma</h6>
                        <p>Corporate Communications
                            Manager
                            VE Commercial Vehicles Ltd
                            Email: dsharma17@vecv.in</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
