import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../pages/Navbar/Navbar";
import Challenges from "../Challenges/Challenges";
import Footer from "../../pages/Footer/Footer";
import Home1 from "./Home1";
import BankRoll from "./BankRoll";
import SportsThrill from "../Challenges/SportsThrill";
import Rewards from "../Rewards/Rewards";
import WherePlay from "../WhyUs/WherePlay";
import Whyus from "../WhyUs/Whyus";
import JoinUs from "../Join/JoinUs";
import Slots from "./Slots";
import HomeTwo from "./HomeTwo";
import Testimonial from "../Testimonials/Testimonial";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#challenges") {
      const element = document.getElementById("challenges");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <Navbar />
      <Home1 />
      <HomeTwo />
      {/* <BankRoll /> */}
      <Slots />
      <Challenges />
      <Rewards />
      <SportsThrill />
      <Testimonial />
      <WherePlay />
      <Whyus />
      <JoinUs />
      <Footer />
    </>
  );
};

export default Home;
