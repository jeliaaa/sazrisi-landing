import Button from "./components/ReusableComponents/Button"
import Header from "./components/Header"
import MainHero from "./components/MainHero"
import Subheading from "./components/ReusableComponents/Subheading"
import Services from "./components/Services"
import { useState } from "react"
import { FaX } from "react-icons/fa6"
function App() {
  const [testingAlert, setTestingAlert] = useState(false);
  return (
    <div className="w-full items-center justify-center flex relative bg-gray-100">
      {testingAlert && <div className="fixed z-100 flex items-center justify-between px-10 py-4 bottom-0 left-0 w-[100dvw]! bg-gray-200">
        <span>ვებ-გვერდი ტესტირების რეჟიმშია.</span>
        <FaX onClick={() => setTestingAlert(false)} className="cursor-pointer" />
      </div>}
      <div className="w-[1600px] pb-100">
        <Header />
        <MainHero />
        <Subheading title={'სერვისები'} description={'ჩვენ გთავაზობთ სხვადასხვა საგნის გამოცდებისთვის მოსამზადებელ კურსებს.'} />
        <Services />
      </div>
    </div>
  )
}

export default App
