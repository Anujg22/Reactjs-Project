import React from 'react'
import {Grid} from '@material-ui/core'
import pic1 from './images/sub.jpg'
import pic2 from './images/light.jpg'
import pic3 from './images/medium.jpg'
import pic4 from './images/haulage.jpg'
import pic5 from './images/tipper.jpg'
import pic6 from './images/tractor_trailer.jpg'
import pic7 from './images/volvo1.jpg'
import pic8 from './images/volvo2.jpg'
import pic9 from './images/mining.jpg'
import pic10 from './images/construction.jpg'
import pic11 from './images/haul.jpg'
import pic12 from './images/school.jpg'
import pic13 from './images/staff.jpg'
import pic14 from './images/routepermit.jpg'

const Products = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="text-center text-primary font-weight-bold mt-4">EICHER LIGHT & MEDIUM DUTY TRUCKS</h1>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="image text-center">
                            <img src={pic1} alt="truck1" />
                            <h4><span>Sub 5 TON</span></h4></div>
                    </div>
                    <div className = "col-md-4">
                        <div className="image text-center">
                            <img src={pic2} alt="truck2" />
                            <h4><span>Light Duty</span></h4></div>
                    </div>
                    <div className = "col-md-4">
                        <div className="image text-center">
                            <img src= {pic3} alt="truck3" />
                            <h4><span>Medium Duty</span></h4></div>
                    </div>
                    
                </div>
            </div>
            <hr/>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="text-center text-primary font-weight-bold mt-4">EICHER HEAVY DUTY TRUCKS</h1>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="image text-center">
                            <img src={pic4} alt="truck4" />
                            <h4><span>Haulage</span></h4></div>
                    </div>
                    <div className = "col-md-4">
                        <div className="image text-center">
                            <img src={pic5} alt="truck5" />
                            <h4><span>Tipper</span></h4></div>
                    </div>
                    <div className = "col-md-4">
                        <div className="image text-center">
                            <img src= {pic6} alt="truck6" />
                            <h4><span>Tractor Trailer</span></h4></div>
                    </div>
                    
                </div>
            </div>
            <hr/>
            <div className = "container">
                <div className = "row">
                    <div className = "col-md-12">
                        <h1 className="text-center text-primary font-weight-bold mt-4">VOLVO TRUCKS INDIA</h1>
                    </div>
                </div>
            </div>
            <div className = "container">
                <div className = "row">
                    <div className = "col-md-4">
                    <div className="image text-center">
                            <img src={pic9} alt="truck7" />
                            <h4><span>Mining & Coal Transportation</span></h4></div>
                    </div>
                    <div className = "col-md-4">
                    <div className="image text-center">
                            <img src={pic10} alt="truck7" />
                            <h4><span>COnstruction & Infra</span></h4></div>
                    </div>
                    <div className = "col-md-4">
                    <div className="image text-center">
                            <img src={pic11} alt="truck7" />
                            <h4><span>Long Haul & Heavy Haul</span></h4></div>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="text-center text-primary font-weight-bold mt-4">VOLVO BUSES INDIA</h1>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="image text-center">
                            <img src={pic7} alt="truck7" />
                            <h4><span>Volvo B8R</span></h4></div>
                    </div>
                    <div className = "col-md-6">
                        <div className="image text-center">
                            <img src={pic8} alt="truck8" />
                            <h4><span>Volvo B11R</span></h4></div>
                    </div>
                    
                </div>
            </div>
            <hr/>
            <div className = "container">
                <div className = "row">
                    <div className = "col-md-12">
                        <h1 className="text-center text-primary font-weight-bold mt-4">EICHER BUSES</h1>
                    </div>
                </div>
            </div>
            <div className = "container">
                <div className = "row">
                    <div className = "col-md-4">
                    <div className="image text-center">
                            <img src={pic12} alt="truck8" />
                            <h4><span>School Bus</span></h4></div>
                    </div>
                    <div className = "col-md-4">
                    <div className="image text-center">
                            <img src={pic13} alt="truck8" />
                            <h4><span>Staff Bus</span></h4></div>
                    </div>
                    <div className = "col-md-4">
                    <div className="image text-center">
                            <img src={pic14} alt="truck8" />
                            <h4><span>Route Permit</span></h4></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products


 