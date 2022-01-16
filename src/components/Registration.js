import React, { useState } from 'react';
// import { Formik, Form, Field } from 'formik';
import UserIcon from '../images/userIcon.svg'
import passwordimage from '../images/password.png'
import phone from '../images/phone.png'
import skillimage from '../images/skill.png'
import place from '../images/place.png'
import axios from 'axios';
import Swal from 'sweetalert2'
import ReactFormInputValidation from "react-form-input-validation";
import { useHistory} from 'react-router-dom'



function Registration() {
    const [usertype, setusertype] = useState("")
    const [fullname, setfullname] = useState("")
    const [phonenumber, setphonenumber] = useState("")
    const [location, setlocation] = useState("")
    const [skill, setskill] = useState("")
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    const history = useHistory()

   

    function register(e) {

        e.preventDefault();

        if (phonenumber.length < 10 || password.length <10) {
            alert("Phone number & Password should be of 10 digits")
        }
        
        else {
            var user = {
                usertype: usertype,
                fullname: fullname,
                phonenumber: phonenumber,
                location: location,
                skill: skill,
                username: username,
                password: password
            }
            // console.log(user);

            axios.post('/api/user/registeruser', user).then(res => {
                Swal.fire('Congrats', 'Registration successfull', 'success')
                history.push('/get-details')
            }).catch(err => { alert(err) });
        }
    }
    return (

        <div className='loginMaindiv'>
            <i class="fas fa-map-marker-alt"></i>
            <div className='loginFormContainer'>


                <form style={{ textAlign: "center", maxWidth: "280px", minWidth: "280px" }} onSubmit={register}>
                    <p className='loginHeading'>Register</p>
                    <p className='loginText'>Create your account</p>
                    <div className='loginFieldContainer' style={{ marginTop: "20px" }}>
                        <label for="usertype">Choose a user type</label>

                        <select name="usertype" id="usertype" value={usertype}
                            onChange={(e) => { setusertype(e.target.value) }} required={true}>
                            <option value="">select</option>
                            <option value="Job seeker">Job seeker</option>
                            <option value="Job Provider">Job Provider</option>

                        </select>
                    </div>
                    <div className='loginFieldContainer' style={{ marginTop: "20px", marginBottom: "20px" }}>
                        <label for="usertype">Choose skill/required skill</label>
                        <select name="skill" id="skill" value={skill}
                            onChange={(e) => { setskill(e.target.value) }} required={true}>
                            <option value="">none</option>
                            <option value="Mason">Mason</option>
                            <option value="Carpenter">Carpenter</option>
                            <option value="plumber">plumber</option>
                            <option value="gardener">gardener</option>
                            <option value="driver">driver</option>

                        </select>
                    </div>
                    <div className='loginFieldContainer' style={{ marginTop: "20px" }}>
                        <img src={UserIcon} />
                        <input type="text"
                            name="fullname"
                            value={fullname}
                            onChange={(e) => { setfullname(e.target.value) }}
                            id="fullname"
                            className="loginField"
                            placeholder="Full Name"
                            required

                        />
                    </div>
                    <div className='loginFieldContainer' style={{ marginTop: "20px" }}>
                        <img src={phone} style={{ width: "30px", height: "30px" }} />
                        <input type="tel"
                            name="phonenumber"
                            value={phonenumber}
                            onChange={(e) => { setphonenumber(e.target.value) }}
                            id="phonenumber"
                            className="loginField"
                            placeholder="Phone Number"
                            required
                        />
                    </div>
                    <div className='loginFieldContainer' style={{ marginTop: "20px", marginBottom: "20px" }}>
                        <img src={place} style={{ width: "30px", height: "30px" }} />
                        <input type="text"
                            name="location"
                            value={location}
                            onChange={(e) => { setlocation(e.target.value) }}
                            id="location"
                            className="loginField"
                            placeholder="Location"
                            required
                        />
                    </div>


                    {/* <div className='loginFieldContainer' style={{ marginTop: "0px", marginBottom: "20px" }}>
                        <img src={skillimage} style={{ width: "30px", height: "30px" }} />
                        <input type="text"
                            name="skill"
                            value={skill}
                            onChange={(e) => { setskill(e.target.value) }}
                            id="skill"
                            className="loginField"
                            placeholder="Skill"
                            required
                        />
                    </div> */}
                    <div className='loginFieldContainer'>
                        <img src={UserIcon} style={{ width: "35px", height: "45px" }} />
                        <input type="text"
                            type="text"
                            name="userName"
                            value={username}
                            onChange={(e) => { setusername(e.target.value) }}
                            id="userName"
                            className="loginField"
                            placeholder="User Name"
                            required
                        />
                    </div>
                    <div className='loginFieldContainer' style={{ marginTop: "20px" }}>
                        <img src={passwordimage} style={{ width: "30px", height: "30px" }} />
                        <input type="password" name="password"
                            value={password}
                            onChange={(e) => { setpassword(e.target.value) }}
                            id="password"
                            className="loginField"
                            placeholder="Password"
                            required
                            

                        />
                    </div>
                    <button type='submit' className='loginFormSubmitbutton'>
                        Registration
                    </button>

                    {/* <a className='loginText' style={{ marginTop: "35px", fontSize: "18px" }}>not have an account?<br /><span style={{ fontWeight: "500", cursor: "pointer" }} onClick={() => setIsRegister(false)}> Register now</span></a> */}
                    {/* <p className='loginText' style={{ marginTop: "35px", fontSize: "18px" }}>Already have an account?<br /><span style={{ fontWeight: "500", cursor: "pointer" }} onClick={() => setIsLogin(true)}> Login now</span></p>} */}
                </form>

            </div>
        </div>
    )
}

export default Registration;