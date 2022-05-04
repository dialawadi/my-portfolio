import React from 'react'
import Home from "../Home/Home";
import Work from "../Work/Work";
import About from '../About/About';


export default function Index({theme}) {
    return (
        <div className='App'>
            <Home theme={theme} />
            <About theme={theme} />
            <Work theme={theme} />
        </div>
    )
}


