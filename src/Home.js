import React from 'react'
import pic1 from "./images/home.jpg"

const Home = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 mt-4 mb-4">
                        <img src = {pic1} width = "100%" alt = "home" />
            </div>
                </div>
                    </div>
            <div className = "container">
                <div className = "row">
                    <div className = "col-md-12">
                        <h1 className="text-center text-primary font-weight-bold mt-4">Welcome to VECV</h1>
                        <p>
                            VE Commercial Vehicles Limited (VECV) is a joint venture between the Volvo Group and Eicher Motors Limited. In operation
                            since July 2008, VECV is multi-brand, multi-division company comprising of a complete range of Eicher Trucks and Buses, Volvo Buses,
                            exclusive distribution of Volvo Trucks in India, engine manufacturing and export hub for Volvo Group, non-automotive engines and
                            Eicher component business. VECV is also constantly introducing innovative technologies & services, through 9 manufacturing facilities
                            spread across India, supported by a strong dealership network of over 500 outlets. The company is exporting to over 34
                            countries and is being recognized as an industry leader in driving modernization in commercial transportation in India
                            and the developing world.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 mt-4 mb-4">
                        <h2 className="text-center text-primary"> Our Businesses </h2>
                        <ul className = "mt-4">
                            <li>Eicher Trucks and Buses</li>
                            <li>Volvo Trucks India</li>
                            <li>Volvo Buses India</li>
                            <li>Eicher Engineering Components</li>
                            <li>VECV Engine Business</li>
                            <li>VE Powertrain</li>
                        </ul>
                    </div>
                </div>
                <div className = "row">
                    <div className = "col-md-12 mt-4 mb-4">
                        <h2 className="text-center text-primary">Our Manufacturing Facilities</h2>
                        <ul className = "mt-4">
                            <li>Pithampur Plant</li>
                            <li>Dewas Plant</li>
                            <li>Bhopal Plant</li>
                            <li>Thane Plant</li>
                            <li>VE Powertrain Plant</li>
                            <li>Baggad Plant</li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}



export default Home;
