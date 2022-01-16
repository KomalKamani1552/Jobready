import React, { useEffect, useState } from 'react'
import personlogo from '../images/personlogo.svg';

import place from '../images/place.png';
import skillimg from '../images/skill.png';
import axios from 'axios';
import phone from '../images/phone.png'
import { Scrollbars } from 'react-custom-scrollbars';

const Listcomponent = () => {
    const [jobseekerlist, setjobseekerlist] = useState([])
    useEffect(() => {
        axios.post('/api/user/getjobseeker').then(res => {
            console.log(res);
            setjobseekerlist(res.data);
        }).catch(err => { console.log(err) })
    }, [])


    return (

        <>
            <div className='parentOfListComponent' style={{ backgroundColor: "#F0F2F3" }}>
                <div className='filterContainer'>
                    <h2 style={{ textAlign: "center", fontFamily: "Arial", color: "#2987DE" }}>FILTER</h2>
                    <hr/>
                    <input type="text" placeholder='Search by location' style={{
                        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", borderRadius: "9px" , width: "240px" , height : "25px" , marginLeft : "40px"
                    }}></input>
                    <div className='filterBySkill'>
                    <p style={{fontFamily: "Arial", fontSize: "20px" }}>Filter By Skill</p>    
                    <button className='loginFormSubmitbutton' style={{width : "70%" , marginTop: "10px"}}>Mason</button><br/>
                    <button className='loginFormSubmitbutton' style={{width : "70%" , marginTop: "20px"}}>Plumber</button><br/>
                    <button className='loginFormSubmitbutton' style={{width : "70%" , marginTop: "20px"}}>Carpenter</button><br/>
                    <button className='loginFormSubmitbutton' style={{width : "70%" , marginTop: "20px"}}>Gardener</button><br/>
                    <button className='loginFormSubmitbutton' style={{width : "70%" , marginTop: "20px"}}>Driver</button>
                    </div>

                </div>
                <div>
                    <h2 style={{ textAlign: "center", fontFamily: "Arial", color: "#2987DE" }}>List of job seeker</h2>
                    <hr />

                    <Scrollbars autoHeight autoHeightMax={580} autoHeightMin={580} style={{ boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)" }}>
                        {jobseekerlist.map((objs) => {
                            return (
                                <div className='listContainer'>
                                    <div style={{ width: "25%", display: "flex", alignItems: "center" }}>
                                        <div>
                                            <img src={personlogo} width={60} height={70} style={{ opacity: "0.5" }} />
                                        </div>
                                        <div>
                                            <p style={{ fontfamily: "arial", fontSize: "20px" }}>{objs.fullname}</p>
                                        </div>
                                    </div>
                                    <div style={{ width: "25%", display: "flex", alignItems: "center" }}>
                                        <div>
                                            <img src={place} width={30} height={30} style={{ position: "relative", marginLeft: "100px", opacity: "0.5" }} />
                                        </div>
                                        <div>
                                            <p style={{ fontfamily: "arial", fontSize: "20px" }}>{objs.location}</p>
                                        </div>
                                    </div>
                                    <div style={{ width: "25%", display: "flex", alignItems: "center" }}>
                                        <div>

                                            <img src={skillimg} width={30} height={30} style={{ position: "relative", marginLeft: "100px", opacity: "0.5" }} />
                                        </div>
                                        <div>
                                            <p style={{ fontfamily: "arial", fontSize: "20px", marginRight: "250px" }}>{objs.skill}</p>
                                        </div>
                                    </div>
                                    <div style={{ width: "20%", display: "flex", alignItems: "center" }}>
                                        <div>

                                            <img src={phone} width={30} height={30} style={{ opacity: "0.5" }} />
                                        </div>
                                        <div>
                                            <p style={{ fontfamily: "arial", fontSize: "20px" }}>{objs.phonenumber}</p>
                                        </div>
                                    </div>
                                    {/* <button style={{ height: "40px", color: "white", width: "100px", backgroundColor: "#2987DE", textAlign: "center", border: "none", borderRadius: "5px" }}>View details</button> */}

                                </div>)

                        })}
                    </Scrollbars>
                </div>

            </div>

        </>


    )



}

export default Listcomponent
