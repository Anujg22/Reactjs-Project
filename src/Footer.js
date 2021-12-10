import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <>
        <footer className = "mt-5">
            <div className = "container">
                <div className = "row">
                    <div className = "col-12 col-lg-10 mx-auto">
                        <div className = "row mb-5">
                            <div className = "col-12 col-lg-4 text-center">
                                <h4>Company</h4>
                                <ul>
                                    <li>
                                        <NavLink to ="/About"> About </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to ="/Services"> Services </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to ="/Products"> Products </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to ="/Contact"> Contact </NavLink>
                                    </li>
                                </ul>
                            </div>
                            <div className = "col-12 col-lg-4 text-center">
                                <h4>Our Businesses</h4>
                                <ul>
                                    <li>
                                        Eicher Trucks & Buses
                                    </li>
                                    <li>
                                        VE Powertrain
                                    </li>
                                    <li>
                                        Volvo Buses India
                                    </li>
                                    <li>
                                        Eicher Engineering Components
                                    </li>
                                </ul>
                            </div>
                            <div className = "col-12 col-lg-4 text-center">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li>
                                        <NavLink to ="/Terms"> Terms & Conditions </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to ="/Privacy"> Privacy Policy </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <hr/>
                        <div className="mt-5">
                            <p className = "main-hero-para text-center w-100">
                            © 2018 Eicher. All rights reserved.Privacy PolicyLegal Disclaimer
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer
