import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ResetPassword.css";
import Navbar from "../../pages/Navbar/Navbar";
import Footer from "../../pages/Footer/Footer";
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleResetPassword = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "https://fundedwagers.io/migrate/admin/api/reset-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            otp,
            password,
            new_password: newPassword,
          }),
        }
      );

      const data = await res.json();

      if (data.result) {
        toast.success(data.message || "Password reset successfully!");

        setTimeout(() => {
          navigate("/login");
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
    } catch (err) {
      toast.error("Network error. Please try again.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="reset-main">
        <div className="reset-content">
          <form onSubmit={handleResetPassword}>
            <h5>FORGET PASSWORD</h5>
            <small>Please enter your OTP and set a new password.</small>

            <div className="reset-ipt mt-4">
              <input type="text" name="otp" placeholder="OTP" value={otp} onChange={(e) => setOtp(e.target.value)} />
            </div>
            
            {errors.otp && (
              <div className="error-text" style={{ color: "red", marginBottom: "6px" }} > {errors.otp[0]} </div>
            )}

            {/* Password field */}
            <div className="reset-ipt f-password-container">
              <input type={showPassword ? "text" : "password"} name="password" placeholder="New Password" value={password} onChange={(e) => setPassword(e.target.value)} />
              <span className="f-eye-icon" onClick={() => setShowPassword(!showPassword)} > {showPassword ? <RiEyeOffLine /> : <RiEyeLine />} </span>
            </div>

            {errors.password && (
              <div className="error-text" style={{ color: "red", marginBottom: "6px" }} > {errors.password[0]} </div>
            )}

            {/* New Password field */}
            <div className="reset-ipt f-password-container">
              <input type={showNewPassword ? "text" : "password"} name="new_password" placeholder="Confirm Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
              <span className="f-eye-icon" onClick={() => setShowNewPassword(!showNewPassword)} > {showNewPassword ? <RiEyeOffLine /> : <RiEyeLine />} </span>
            </div>

            {errors.new_password && ( <div className="error-text" style={{ color: "red", marginBottom: "6px" }} > {errors.new_password[0]} </div> )}

            <div className="reset-btn">
              <button type="submit">RESET PASSWORD</button>
            </div>

            <div className="reset-one">
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

export default ResetPassword;
