import "./Footer.css";
import FooterLogo from "../../assets/images/white-logo.png";
import FooterLogo2 from "../../assets/images/gaminghost_logo_footer.png";

const Footer = () => {
  return (
    <div className="Footer-main">
      <div className="footer-content">
        <div className="row footer-top">
          <div className="col-sm-12 col-md-6 col-lg-3 F-one">
            <h5> <img src={FooterLogo} alt="logo" /> </h5>
            <div className="links">
              <p> Funded Data LLC <br /> 30 N Gould St <br /> Sheridan, WY 82801 </p>
            </div>
            <span>support@FundedWagers.io</span>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-3 F-one">
            <h5>Important Links</h5>
            <div className="links">
              <a href="#">Terms & Conditions</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Refund Policy</a>
              <a href="#">Affiliates</a>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-3 F-one">
            <h5>Community</h5>
            <div className="links">
            
          <a href="https://discord.gg/fundedwagers" target="_blank" rel="noopener noreferrer"> Discord Community </a>
          <a href="https://www.instagram.com/fundedwagers.io" target="_blank" rel="noopener noreferrer"> Instagram </a>
          <a href="migrate/faq">FAQ</a>
          <a href="#">Sports Picker Assessment</a>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-3 F-one">
            <h5> <img src={FooterLogo2} alt="logo" /> </h5>
          </div>

          <div className="footer-btm">
            <p>
              Funded Wagers is not a casino, sports book or gambling operator
              and does not accept or place wagers of any type, in any capacity.
              Additionally, Funded Wagers does not endorse or encourage illegal
              gambling of any sort. All information and services provided by
              Funded Wagers are for educational & entertainment purposes only.
              No real money wagering occurs on our website and all challenge
              accounts use virtual profit points to showcase theoretical pick
              results based upon real, live sports odds from established
              operators.
            </p>
            <span>
          
              © {new Date().getFullYear()} Funded Wagers. All Rights Reserved.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
