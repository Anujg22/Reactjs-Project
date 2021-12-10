import React from 'react'
import pic5 from './images/volvo.jpg'

const About = () => {
    return (
        <>
           <div className = "container">
            <div className = "row">
                <div className = "col-md-12">
                    <h1 className="text-center text-primary font-weight-bold mt-4">VECV JOINT VENTURE</h1>

                    <h5 className="text-center mt-4 mb-4">The most successful joint venture in the Indian CV Industry</h5>

                    <p>In 2008, two leading players, Volvo Group and Eicher Motors, in the commercial vehicle 
                        business joined hands with a common vision of driving modernization in the commercial 
                        transport business in India. Volvo Group comes with global expertise, leadership in 
                        product technology, well-defined processes and a brand that is respected all over the 
                        world. Eicher Motors is a leader in the Light and Medium Vehicle segment and brings to 
                        the table frugal engineering, considerable after sales infrastructure, and cost-effective
                        operations. Together they complement each other and combine their strengths to deliver 
                        effective solutions that favorably impact the eco-system. This partnership has helped 
                        modernise and evolve the industry in India and many other countries with emerging markets.
                        </p>

                    <p>The company includes the complete range of Eicher branded trucks and buses, Volvo buses, exclusive 
                        distribution of Volvo Trucks in India, engine manufacturing and exports for Volvo Group, non-
                        automotive engines and Eicher component business. A multi-brand, multi-division company, backed by 
                        innovative products & services, VECV today, is recognised as an industry leader in CV industry.
                        </p>

                    <p>VECV offers a range of ultra-modern trucks across 4.9-55T, along with a wide range of safe and 
                        efficient buses with seating capacity of 12- 72 across light, medium and heavy-duty applications.
                        </p>

                    <p>The world of commercial vehicles is always on the move, be it new emerging markets, state-of-the-art 
                        infrastructure, new policies and the aspirations of customer. And VECV is always ahead with a 
                        continuous transformation of a holistic ecosystem which is based on progressive thinking, advanced 
                        technology and unshakable values. This keeps VECV miles ahead from the rest.
                        </p>

                    
                </div>
                </div>   
                <div className= "row">
                    <div className = "col-md-12 text-center mt-4 mb-4">
                        <img src = {pic5} alt = "volvo"/>
                    </div>
                </div>
            </div> 
        </>
    )
}

export default About
