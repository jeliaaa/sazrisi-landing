import React from 'react'
import MainHero from '../components/MainHero'
import Subheading from '../components/ReusableComponents/Subheading'
import Services from '../components/Services'
import WhatYouGet from '../components/WhatYouGet'
import Benefits from '../components/Benefits'
import AdvantageSwiper from '../components/AdvantagesSwiper'
import FAQ from '../components/FAQ'
import FeedbackSection from '../components/FeedbackSection'
import MailUs from '../components/MailUs'

const MainPage = () => {
    return (
        <div className="main_wrapper mb-20">
            <MainHero />
            <Subheading title={'სერვისები'} description={'ჩვენ გთავაზობთ სხვადასხვა საგნის გამოცდებისთვის მოსამზადებელ კურსებს.'} />
            <Services />
            <WhatYouGet />
            <Subheading title={'მიდგომა'} description={'რატომ უნდა აირჩიოთ ჩვენი პლატფორმა?'} />
            <Benefits />
            <AdvantageSwiper />
            <Subheading title={'FAQ'} description={'ხშირად დასმული შეკითხვები.'} />
            <FAQ />
            <Subheading title={'შეფასება'} description={'თქვენი აზრი ჩვენთვის მნიშვნელოვანია.'} />
            <FeedbackSection />
            <MailUs />
        </div>
    )
}

export default MainPage