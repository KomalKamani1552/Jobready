import React from 'react';
import jrlogo from '../images/jrlogo.svg';
import {useHistory} from "react-router-dom";

function Navigation() {
    const history = useHistory();
    return (
        <div className="navigationContainer">
            <img src={jrlogo} width={190} height={62} style={{cursor:"pointer"}} onClick={()=>{history.push("/")}}/>
            <div className="navigationButtonContainer">
                <button className='navigationButton' onClick={()=>{history.push("/")}}>Home</button>
                <button className='navigationButton' onClick={()=>{history.push("/about")}}>About</button>
                <button className='navigationButton' onClick={()=>{history.push("/emplist")}}>Information wizard</button>
                <button className='navigationButton' onClick={()=>{history.push("/get-details")}}>Login/Register</button>
                <button className='navigationButton'>icon</button>
            </div>
        </div>
    )
}

export default Navigation
