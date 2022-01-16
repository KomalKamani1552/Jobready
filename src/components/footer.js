import React from 'react'
<link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
// import {useHistory} from 'react-router-dom'

function Footer() {
    // const history = useHistory()
    return (
        <div className='footerMainDiv'>
            <div className='borderDiv'>
                <div>
                    <p className='footerHeading'>CONTACT US</p>
                    <p className='footerText'><i class="fas fa-phone-alt"></i>E-mail: abc@gmail.com</p>
                    <p className='footerText'>Phone: 0123456789</p>
                    <p className='footerText'>Location: Gujarat, India</p>
                </div>
                <div className='footerRightSection'>
                    <p className='footerHeading'>USEFUL LINKS:</p>
                    <a  className='footerTextLink'> Job Seeker</a>
                    <a className='footerTextLink' href='/get-details'style={{textDecoration:"none"}}> Login</a>
                    <a className='footerTextLink'> About Us</a>
                </div>
                <div className='footerRightSection'>
                    <p className='footerHeading'>OTHER LINKS:</p>
                    <a  className='footerTextLink'> About us</a>
                    <a className='footerTextLink'> Home</a>
                    
                </div>
            </div>
            <p style={{marginTop : "25px" , textAlign : "center" ,width : "100%" , marginRight: "230px"}}> @ 2021 Directorate of JobReady. All rights reserved</p>
        </div>
    )
}

export default Footer
