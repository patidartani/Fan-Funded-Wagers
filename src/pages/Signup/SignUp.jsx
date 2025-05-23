import { useState } from "react";
import Swal from "sweetalert2";
import "./SignUp.css";
import Navbar from "../../pages/Navbar/Navbar";
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import { BASE_URL } from "../../api/apiService";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_no: "",
    password: "",
    confirm_password: "",
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Input Change Handler
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setIsLoading(true);

    try {
      const response = await fetch(`${BASE_URL}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("Signup response:", data);

      if (response.ok) {
        Swal.fire({
          title: "Success!",
          text: "Signup successful!",
          icon: "success",
          confirmButtonText: "OK",
        }).then(() => {
          window.location.href = "/migrate/login";
        });

        setFormData({
          name: "",
          email: "",
          phone_no: "",
          password: "",
          confirm_password: "",
        });
      } else {
        setErrors(data.error || {});
      }
    } catch (error) {
      alert("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="Signup-main">
        <div className="Signup-content">
          <form onSubmit={handleSubmit}>
            <h5>Sign Up</h5>
            <small>Please enter your details</small>

            <div className="sf-ipt">
              <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} />
            </div>
            {errors.name && (
              <div style={{ color: "red" }} className="error-text"> {errors.name[0]} </div>
            )}

            <div className="sf-ipt">
              <input type="text" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
            </div>
            {errors.email && (
              <div style={{ color: "red" }} className="error-text"> {errors.email[0]} </div>
            )}

            <div className="sf-ipt">
              <input type="text" name="phone_no" placeholder="Phone Number" value={formData.phone_no} onChange={handleChange} />
            </div>
            {errors.phone_no && (
              <div style={{ color: "red" }} className="error-text"> {errors.phone_no[0]} </div>
            )}

            <div className="sf-ipt password-containers">
              <input type={showPassword ? "text" : "password"} name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
              <span className="eye-icons" onClick={() => setShowPassword(!showPassword)} >
                {showPassword ? <RiEyeOffLine /> : <RiEyeLine />} </span>
            </div>
            {errors.password && (
              <div style={{ color: "red" }} className="error-text"> {errors.password[0]} </div>
            )}

            <div className="sf-ipt password-containers">
              <input type={showConfirmPassword ? "text" : "password"} name="confirm_password" placeholder="Confirm Password" value={formData.confirm_password} onChange={handleChange} />
              <span className="eye-icons" onClick={() => setShowConfirmPassword(!showConfirmPassword)} >
                {showConfirmPassword ? <RiEyeOffLine /> : <RiEyeLine />} </span>
            </div>
            {errors.confirm_password && (
              <div style={{ color: "red" }} className="error-text"> {errors.confirm_password[0]} </div>
            )}

            <div className="signup-btn">
              <button type="submit" disabled={isLoading}> {isLoading ? "Submitting..." : "SIGN UP"} </button>
            </div>

            <div className="new-ones">
              <span> Already have an account? <a href="/migrate/login">Sign In</a> </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
