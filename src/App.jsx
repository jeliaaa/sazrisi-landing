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
function App() {
  const [testingAlert, setTestingAlert] = useState(false);
  return (
    <div className="w-full items-center justify-center flex relative bg-gray-100">
      {testingAlert && <div className="fixed z-100 flex items-center justify-between px-10 py-4 bottom-0 left-0 w-[100dvw]! bg-gray-200">
        <span>ვებ-გვერდი ტესტირების რეჟიმშია.</span>
        <FaX onClick={() => setTestingAlert(false)} className="cursor-pointer" />
      </div>}
      <div className="main_wrapper pb-100">
        <Header />
        <MainHero />
        <Subheading title={'სერვისები'} description={'ჩვენ გთავაზობთ სხვადასხვა საგნის გამოცდებისთვის მოსამზადებელ კურსებს.'} />
        <Services />
        <WhatYouGet />
        <Subheading title={'მიდგომა'} description={'რატომ უნდა აირჩიოთ ჩვენი პლატფორმა?'} />
        <Benefits />
        <Subheading title={'FAQ'} description={'ხშირად დასმული შეკითხვები.'} />
        <FAQ />
      </div>
    </div>
  )
}

export default App
