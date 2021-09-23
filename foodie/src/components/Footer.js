import React from "react";
import { GrInstagram, GrFacebook, GrTwitter } from 'react-icons/gr';


function Footer() {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4>Foodie Inc.</h4>
                        <ul className="list-unstyled">
                            <li>123-456-7890</li>
                            <li>New York City</li>
                            <li>123 Street 11234</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h4>Services</h4>
                        <ul className="list-unstyled">
                            <li>Restaurants</li>
                            <li>Recipes</li>
                            <li>Contact Us!</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h4>Social</h4>
                        <ul className="list-unstyled">
                            <li><GrInstagram /> Instagram</li>
                            <li><GrFacebook /> Facebook</li>
                            <li><GrTwitter /> Twitter</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} Foodie Inc. | PerScholas Project 2 | Educational Purposes
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;