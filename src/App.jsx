import { Routes, Route } from "react-router-dom"
import Home from "./components/Home/Home"
import LogIn from "./pages/Login/LogIn"
import SignUp from "./pages/Signup/SignUp"
import Faq from "./components/NavPages/Faq/Faq"
import Forgot from "./pages/Forgot-Password/Forgot"
import PaymentDetail from "./components/Challenges/PaymentDetail"
import Slots from "./components/Home/Slots"
import { ToastContainer } from "react-toastify";
import ResetPassword from "./pages/resetPassword/ResetPassword"
import Testimonial from "./components/Testimonials/Testimonial"

const App = () => {
  return (
    <>
     <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/forget-password" element={<Forgot />} />
        <Route path="/payment-detail" element={<PaymentDetail />} />
        <Route path="/slot" element={<Slots/>} />
        <Route path="/forgot" element={<ResetPassword/>} />
        <Route path="/testimonial" element={<Testimonial />} />
      </Routes> 
    </>
  )
}

export default App