import { useState } from "react";
import Swal from "sweetalert2";  // Import SweetAlert2
import "./LogIn.css";
import Navbar from "../../pages/Navbar/Navbar";
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../redux-toolkit/slices/userSlice"; // Redux action import
import { BASE_URL } from "../../api/apiService"; 

const LogIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");  
  const [password, setPassword] = useState("");
  
  const [errors, setErrors] = useState({});

  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setLoading(true);
  
    try {
      const response = await fetch(`${BASE_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        if (typeof data.error === "string") {
          if (data.error.toLowerCase().includes("password")) {
            setErrors({ password: data.error });  // Show error above password field
          } else if (data.error.toLowerCase().includes("email")) {
            setErrors({ email: data.error });  // Show error above email field
          } else {
            setErrors({ general: data.error }); // General error fallback
          }
        } else if (typeof data.error === "object") {
          setErrors(data.error);
        } else {
          setErrors({ general: data.message || "Something went wrong" });
        }
      } else {
        Swal.fire({
          icon: "success",
          title: "Login Successful!",
          text: "Welcome back!",
          confirmButtonColor: "#3085d6",
        }).then(() => {
          if (data.result && data.user) {
            dispatch(setUser({ userId: data.user }));
          } else {
            console.error("Invalid user data received:", data);
          }
          
          navigate("/");
        });
  
        setEmail("");
        setPassword("");
      }
    } catch (err) {
      setErrors({ general: err.message });
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <>
      <Navbar />
      <div className="LogIn-main">
        <div className="Login-content">
          <form onSubmit={handleSubmit}>
            <h5>Sign In</h5>
            <small>Please enter your details</small>
            <div className="f-ipt mt-4">
            <input
  type="text"
  name="email"
  placeholder="Email"
  value={email || ""}
  onChange={(e) => setEmail(e.target.value)}
/>

            </div>
            {errors.email && <small style={{ color: "red" }} className="error-msg">{Array.isArray(errors.email) ? errors.email[0] : errors.email}</small>}


            <div className="f-ipt password-container">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                className="eye-icon"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <RiEyeOffLine /> : <RiEyeLine />}
              </span>
            </div>
          {errors.password && <small style={{ color: "red" }} className="error-msg">{Array.isArray(errors.password) ? errors.password[0] : errors.password}</small>}

            <div className="forget">
              <a href="/migrate/forget-password">Forgot Password?</a>
            </div>
            <div className="login-btn">
              <button type="submit" disabled={loading}>
                {loading ? "Loading..." : "SIGN IN"}
              </button>
            </div>
            {errors.general && <small style={{ color: "red", display: "block", marginTop: "10px" }}>{errors.general}</small>}


            <div className="new-one">
              <span>
                New on our platform? <a href="/migrate/signup">Sign Up</a>
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LogIn;
