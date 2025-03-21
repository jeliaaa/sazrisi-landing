import Button from "./components/ReusableComponents/Button"
import Header from "./components/Header"
import MainHero from "./components/MainHero"
import Subheading from "./components/ReusableComponents/Subheading"
import Services from "./components/Services"
import { useState } from "react"
import { FaX } from "react-icons/fa6"
import WhatYouGet from "./components/WhatYouGet"
import Benefits from "./components/Benefits"
import FAQ from "./components/FAQ"
import FeedbackSection from "./components/FeedbackSection"
import MailUs from "./components/MailUs"
import AdvantageSwiper from "./components/AdvantagesSwiper"
import Footer from "./components/Footer"
function App() {
  const [testingAlert, setTestingAlert] = useState(true);
  return (
    <div className="w-full items-center justify-center flex flex-col relative bg-gray-100">
      {testingAlert && <div className="fixed z-100 flex items-center justify-between px-10 py-4 bottom-0 left-0 w-[100dvw]! bg-gray-200">
        <span>ვებ-გვერდი ტესტირების რეჟიმშია.</span>
        <FaX onClick={() => setTestingAlert(false)} className="cursor-pointer" />
      </div>}
      <Header />
      <div className="main_wrapper ">
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
      <Footer />

    </div>
  )
}

export default App
