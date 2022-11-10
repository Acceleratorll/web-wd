import Aos from 'aos'
import React, { useEffect } from 'react'
import Featured from '../component/Featured'
import Footer from '../component/Footer'
import Header from '../component/Header'
import Hero from '../component/Hero'
import Steps from '../component/Steps'
import Template from '../component/Template'
import Testimonials from '../component/Testimonials'
import Trusted from '../component/Trusted'
import Fade from 'react-reveal/Fade'

const LandingPage = () => {

    return (
        <>
            <Header />
            <Fade bottom>
                <Hero />
                {/* <Sponshorship /> */}
                <Trusted />
                <Steps />
                <Template />
            </Fade>
            <Featured />
            <Testimonials />
            <Footer />
        </>
    )
}

export default LandingPage