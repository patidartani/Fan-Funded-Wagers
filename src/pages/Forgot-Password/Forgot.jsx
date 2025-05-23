import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Forgot.css";
import Navbar from "../../pages/Navbar/Navbar";
import Footer from "../../pages/Footer/Footer";
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Forgot = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const handleSendOTP = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "https://fundedwagers.io/migrate/admin/api/send-otp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      const data = await res.json();

      if (data.result) {
        toast.success(data.message || "OTP sent successfully!");
        setTimeout(() => {
          navigate("/forgot");
        }, 2000);
      } else {
        if (data.error) {
          setErrors(data.error);
          // if (data.error.email) {
          //   toast.error(data.error.email[0]);
          // }
        } else {
          toast.error(data.message || "Something went wrong!");
        }
      }
    } catch (error) {
      toast.error("Network error. Please try again.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="Forgot-main">
        <div className="Forgot-content">
          <form onSubmit={handleSendOTP}>
            <h5>SEND OTP</h5>
            <small>Please enter your email address.</small>
            
            <div className="forgot-ipt mt-4">
              <input type="text" name="email" placeholder="Email" value={email} onChange={(e) => { setEmail(e.target.value); setErrors({}); }} />
            </div>
            {errors.email && (
              <div className="error-text" style={{ color: "red", marginBottom: "6px" }} > {errors.email[0]} </div>
            )}

            <div className="reset-btn"> <button type="submit">SEND OTP</button> </div>

            <div className="f-new-one">
              <span> Remembered your password? <a href="/migrate/login">Sign In</a> </span>
            </div>

          </form>
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default Forgot;
