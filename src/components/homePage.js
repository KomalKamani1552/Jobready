import React from 'react';
import '../style/style.css';
import Naviation from './navigation';
import Footer from './footer';
import homethumbnail from '../images/homethumbnail.svg';
import first from '../images/first.svg';
import second from '../images/second.svg';
import thirdd from '../images/thirdd.svg';
import plumber from '../images/plumber.svg';
import driver from '../images/driver.svg';
import carpenters from '../images/carpenters.svg';
import mason from '../images/mason.svg';
// import round from '../images/round.svg';
import four from '../images/four.svg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function HomePage() {

    return (
        <div className='homepageContainer'>

            <div className='homeSection1Container'>
                <div className='left'>
                    <p className='text1'>LAND OF OPPRTUNITIES & <br /> TALENTS...</p>
                    <div className='blueLine' />
                    <div className='homepageleftTextbottomDiv'>
                        <hr id='green'></hr>
                        <div>
                            <p className='text2'> A new hope forJob seekers & <br /> Job Provider... <br></br>
                                JobReady is a platform to bring together them in one place.
                            </p>
                            <button className='get'>Get Started</button>
                        </div>
                    </div>
                </div>
                <div className='thumbnailContainer'>
                    <img src={homethumbnail} width={565} height={580} />
                </div>
            </div>
            <div className='homeSection2container'>
                <p className='homeSection2Heading'>Features for Job Seeker  &  Job Provider</p>
                <div className='blackLine' />
                <div className='homeSection2CardContainer'>
                    <div className='homeCardWhite'>
                        <div>
                            <img src={first} width={238} height={154} />
                        </div>
                        <p style={{ color: "#2987DE", fontFamily: "sans-serif", fontSize: "30px", paddingTop: "40px" }}>
                            Quick & Easy Registration
                        </p>
                    </div>
                    <div className='homeCardWhite'>
                        <div>
                            <img src={second} width={238} height={154} style={{ marginTop: "7px" }} />
                        </div>
                        <p style={{ color: "#2987DE", fontFamily: "sans-serif", fontSize: "30px", paddingTop: "40px" }}>
                            Skill-based matching
                        </p>
                    </div>
                    <div className='homeCardWhite'>
                        <div>
                            <img src={thirdd} width={228} height={144} style={{ marginTop: "7px" }} />
                        </div>
                        <p style={{ color: "#2987DE", fontFamily: "sans-serif", fontSize: "30px", paddingTop: "47px" }}>
                            Location based matching
                        </p >
                    </div>
                    <div className='homeCardWhite'>
                        <div>
                            <img src={four} width={248} height={164} style={{ marginTop: "5px" }} />
                        </div>
                        <p style={{ color: "#2987DE", fontFamily: "sans-serif", fontSize: "30px", paddingTop: "33px" }}>
                            Direct call from job provider
                        </p>
                    </div>
                </div>
            </div>
            <div className='sliderContainerDiv'>
                <Slider


                    dots={true}
                    slidesToShow={3}
                    autoplay={true}
                    autoplaySpeed={1500}
                    className='homeSlider'



                >
                    {/* <div>
                    <img src={carpenter2} width={800} height={385}  style={{ marginTop: "5px" ,width:"100%"  }}  />
                </div> */}
                    <div>
                        <img src={driver} width={800} height={385} style={{ marginTop: "7px", width: "100%" }} />
                    </div>
                    <div>
                        <img src={mason} width={800} height={385} style={{ marginTop: "7px", width: "100%" }} />
                    </div>
                    <div>
                        <img src={carpenters} width={800} height={385} style={{ marginTop: "7px", width: "100%" }} />
                    </div>
                    <div>
                        <img src={plumber} width={800} height={385} style={{ marginTop: "7px", width: "100%" }} />
                    </div>
                    {/* <div>
                    <img src={round} width={800} height={385} style={{ marginTop: "7px",width:"100%" }} />
                </div> */}

                </Slider>
            </div>
        </div>
    )
}

export default HomePage
