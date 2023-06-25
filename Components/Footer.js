import React from "react"
import './Footer.css'

const Footer = () => {
    return(
        <div className="footer">
            <div className="sb__footer section_padding">
                <div className="sb__footer-links">
                    <div className="sb__footer-links_div">
                        <h4>For Business</h4>
                        <a href="/Individual">
                            <p>Individual</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Company</h4>   
                            <a href="/About">
                            <p>About</p>
                        </a>
                            <a href="/contact">
                            <p>Contact</p>
                        </a>
                    </div>
                    <hr></hr>
                    <div className="sb__footer-below">
                    <div className="sb__footer-copyright">
                        <p>
                            @{new Date().getFullYear()} Rekkr Industries LLC. All rights reserved.
                        </p>
                    </div>
                    <div className="belowLinks">
                        <a href="/Terms"><div><p>Terms & Conditions</p></div></a>
                        <a href="/Privacy"><div><p>Privacy</p></div></a>
                        <a href="/Security"><div><p>Security</p></div></a>
                        <a href="/Cookie"><div><p>Cookie Declaration</p></div></a>
                    </div>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default Footer