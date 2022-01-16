import React from 'react'
import personlogo from '../images/personlogo.svg';
import place from '../images/place.png';
import skill from '../images/skill.png';
import Listcomponent from './Listcomponent';
 

const EmpList = () => {
    return (
        <div className='emplistContainer'>
            {/* <h1 style={{textAlign : "center" , fontFamily:"Arial" ,color:"#2987DE"}}>List of Job Seekers</h1> */}
            <div className='filterContainer'>

            </div>
            

        <Listcomponent/>

        </div >
    )
}

export default EmpList
