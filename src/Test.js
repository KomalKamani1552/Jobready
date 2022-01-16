import React from 'react'
import axios from 'axios'

export const test = () => {
    function getdata() {
        axios.get('/api/helloworld').then((result) => {
            console.log(result);
        }).catch((err) => {
            console.log(err)
        });
    }
    return (
        <div>
            <button onClick={getdata}>Get data from node js</button>
        </div>
    )
}

export default test