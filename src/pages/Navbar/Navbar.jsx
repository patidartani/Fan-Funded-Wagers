import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useSelector, useDispatch } from "react-redux";
import LOGO from "../../assets/images/white-logo.png";
import { logout } from "../../redux-toolkit/slices/userSlice";
import { BASE_URL } from "../../api/apiService";
import Swal from "sweetalert2";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user?.userId);



  const handleChallengesClick = (e) => {
    e.preventDefault();
    navigate("/#challenges");
  };
  const handleProcessClick = (e) => {
    e.preventDefault();

    const element = document.getElementById("slots");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    navigate("/#slot");
  };

  // ------------------logout api------------------------
  const handleLogout = async () => {
    try {
      const response = await fetch(`${BASE_URL}/logout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: userId }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Logout failed!");
      }

      console.log("Logout Response:", data);

      Swal.fire({
        icon: "success",
        title: "Logged Out!",
        text: "You have been logged out successfully.",
        timer: 2000,
        showConfirmButton: false,
      });

      dispatch(logout());
      navigate("/login");
    } catch (error) {
      console.error("Logout Error:", error);

      Swal.fire({
        icon: "error",
        title: "Logout Failed",
        text: error.message,
      });
    }
  };

  // ----------------------------------------------------

  return (
    <div className="Navbar-main">
      <div className="Navbar-Content">
        <div className="nav-left">
          <div className="logo">
            <Link to="/"> <img src={LOGO} alt="Logo" /> </Link>
          </div>
        </div>

        <div className="nav-right">
          <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
            <i className="ri-menu-2-line"></i>
          </div>

          <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
            {/* <li><Link to="/">Home</Link></li> */}
            <li> <a href="#" onClick={handleProcessClick}> Evaluation Process </a></li>
            <li> <a href="#" onClick={handleChallengesClick}> Challenges </a> </li>
            <li> <a href="https://fundedwagers.io/migrate/admin">Games</a> </li>
            <li> <Link to="/faq">FAQ</Link> </li>
            {userId ? (
              <li> <Link onClick={handleLogout}>Logout</Link> </li>
            ) : (
              <li> <Link to="/login">Login</Link> </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
