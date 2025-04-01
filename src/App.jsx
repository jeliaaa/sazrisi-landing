import Header from "./components/Header";
import { useState } from "react";
import { FaX } from "react-icons/fa6";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import UnderConstruction from "./pages/UnderConstruction";
import RawInfo from "./pages/RawInfo";
import Login from "./app/login&register/login";
import AppLayout from "./app/AppLayout"; // Ensure correct import
import Register from "./app/login&register/Register";

function App() {
  const [testingAlert, setTestingAlert] = useState(false);

  return (
    <div className="w-full items-center justify-center flex flex-col relative bg-gray-100">
      {testingAlert && (
        <div className="fixed z-100 flex items-center justify-between px-10 py-4 bottom-0 left-0 w-[100dvw]! bg-gray-200">
          <span>ვებ-გვერდი ტესტირების რეჟიმშია.</span>
          <FaX onClick={() => setTestingAlert(false)} className="cursor-pointer" />
        </div>
      )}

      <Routes>
        {/* Routes with Header and Footer */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <MainPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/information"
          element={
            <>
              <Header />
              <RawInfo />
              <Footer />
            </>
          }
        />

        {/* Routes without Header and Footer */}
        <Route path="/app" element={<AppLayout />}>
          <Route index element={<UnderConstruction />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
