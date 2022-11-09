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

const LandingPage = () => {

    useEffect(() => {
        Aos.init({
            duration: 100
        })
        Aos.refresh()
    }, []);

    return (
        <>
            <Header />
            <Hero />
            {/* <Sponshorship /> */}
            <Trusted />
            <Steps />
            <Template />
            <Featured />
            <Testimonials />
            <Footer />
        </>
    )
}

export default LandingPage