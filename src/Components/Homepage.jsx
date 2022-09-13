import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import Footer from './Footer'

const Homepage = () => {
    return (
        <>
            <Navbar />
            <div className='homepagetext'>
                Login OR Register With Us
            </div>
            <Banner />
            <Footer />
        </>

    )
}

export default Homepage