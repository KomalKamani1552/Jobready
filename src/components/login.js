import React, { useState } from 'react';
// import { Formik, Form, Field } from 'formik';
import UserIcon from '../images/userIcon.svg'
import Registration from './Registration';
import registration from "./Registration"
import passwordimage from '../images/password.png'
import axios from 'axios';
import Swal from 'sweetalert2'

function Login() {

    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")

    // function onlogin(e) {

    //     e.preventDefault();

    //     if (password.length < 5) {
    //         alert(" Password should be of 10 digits")
    //     }

    //     else {
    //         var user = {
    //             username: username,
    //             password: password
    //         }
    //         // console.log(user);

    //         axios.post('/api/user/loginuser', user).then(res => {
    //             Swal.fire('Congrats', 'login successfull', 'success')
    //         }).catch(err => { alert(err) });
    //     }
    // }



    return (
        <div className='loginMaindiv'>
            <div className='loginFormContainer'>
                <form style={{ textAlign: "center", maxWidth: "280px", minWidth: "280px" }}>
                    <p className='loginHeading'>Login</p>
                    <p className='loginText'>Sign in to your account</p>
                    <div className='loginFieldContainer'>
                        <img src={UserIcon} />
                        <input type="text"
                            type="text"
                            name="userName"
                            id="userName"
                            className="loginField"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => { setusername(e.target.value) }}
                            required
                        />
                    </div>
                    <div className='loginFieldContainer' style={{ marginTop: "20px" }}>
                        <img src={passwordimage} style={{ width: "30px", height: "30px" }} />
                        <input type="password"
                            name="password"
                            id="password"
                            className="loginField"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => { setpassword(e.target.value) }}
                            required
                        />
                    </div>
                    <button type='submit' className='loginFormSubmitbutton'>
                        Login
                    </button>

                    <a href='/registration' className='loginText' style={{ marginTop: "35px", fontSize: "18px" }}>not have an account? <br /><span style={{ fontWeight: "500", cursor: "pointer" }} > Register now...</span></a>
                    {/* <p className='loginText' style={{ marginTop: "35px", fontSize: "18px" }}>Already have an account?<br /><span style={{ fontWeight: "500", cursor: "pointer" }} onClick={() => setIsLogin(true)}> Login now</span></p>} */}
                </form>


            </div>
        </div>
    )
}

export default Login
