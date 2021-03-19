import React from 'react'
import NavComponent from './Nav'

export default function Home() {
    return (
        <div>
        <NavComponent/>
        <div className='card bg-light text-center' style={{margin:'10rem'}}>
            <h1 className='m-5'>Welcome Home</h1>
        </div>
        </div>
    )
}
