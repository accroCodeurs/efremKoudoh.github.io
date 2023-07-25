import React from 'react'
import { FooterScreen } from '../../layouts/footer'
import { HeaderScreen } from '../../layouts/header'
import { HeroScreen } from '../../layouts/hero'
import { AboutScreen } from '../../layouts/about'
import { ResumeScreen } from '../../layouts/resume'
import { FactScreen } from '../../layouts/facts'
import { PortofolioScreen } from '../../layouts/portofolio'
import { ServiceScreen } from '../../layouts/service'
import { TestimonialScreen } from '../../layouts/testimonial'
import { ContactScreen } from '../../layouts/contact'
import PourcentageScreen from '../../layouts/pourcentage'
import '../../../assets/css/style.css'

export function IndexFront(){
    return(
        <>
            <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>
            <HeaderScreen/>
            <HeroScreen/>

            <main id="main">
                <AboutScreen/>
                <FactScreen/>
                <PourcentageScreen/>
                <ResumeScreen/>
                <PortofolioScreen/>
                <ServiceScreen/>
                <ContactScreen/>
            </main>

            <FooterScreen/>
            <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>

        </>
    )
}