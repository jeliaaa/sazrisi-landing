import Header from "./components/Header"
import { useState } from "react"
import { FaX } from "react-icons/fa6"
import Footer from "./components/Footer"
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import UnderConstruction from "./pages/UnderConstruction";
import RawInfo from "./pages/RawInfo";
function App() {
  const [testingAlert, setTestingAlert] = useState(true);
  return (
    <div className="w-full items-center justify-center flex flex-col relative bg-gray-100">
      {testingAlert && <div className="fixed z-100 flex items-center justify-between px-10 py-4 bottom-0 left-0 w-[100dvw]! bg-gray-200">
        <span>ვებ-გვერდი ტესტირების რეჟიმშია.</span>
        <FaX onClick={() => setTestingAlert(false)} className="cursor-pointer" />
      </div>}
      <Header />
        <Routes>
          <Route index path="/" element={<MainPage />} />
          <Route path="/app" element={<UnderConstruction />} />
          <Route path="/information" element={<RawInfo />} />
        </Routes>
      <Footer />
    </div>
  )
}

export default App
