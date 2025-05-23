import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./BankRoll.css";
import ballImage from "../../assets/images/basket-ball.png";
import stagesImg from "../../assets/images/stages.png";

gsap.registerPlugin(ScrollTrigger);

const BankRoll = () => {

  const ballRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
          gsap.to(ballRef.current, {
            y: 300, // Scroll hone pe neeche move karegi
            scale: 1.5, // 1.5x size ho jayega scroll ke sath
            ease: "power1.out",
            scrollTrigger: {
              trigger: containerRef.current, // Animation sirf isi component me hoga
              start: "top 10%",
              end: "bottom 10%",
              scrub: true,
            },
          });
        }, []);
        
        

  return (
    <div className="BankRoll-main" ref={containerRef}>
      <img ref={ballRef} src={ballImage} alt="Floating Ball" className="floating" />

      <div className="BankRoll">
        <div className="BankRoll-left">
        <h1 style={{fontWeight:"500"}} >
        <span className="title-padding">How to Get a</span><br/>
        <span className="line-right-box rc-right-bgs mt-2"> FanFunded Bankroll? </span>
        </h1>
        
        <ul className="requirements">
					<li><span className="icon"></span>Make&nbsp;<strong>33%</strong></li>
					<li><span className="icon"></span>Don’t lose&nbsp;<strong>15%</strong>&nbsp;in a day</li>
					<li><span className="icon"></span>Don’t lose&nbsp;<strong>20%</strong>&nbsp;in total</li>
				</ul>
        
        </div>
        <div className="BankRoll-right"> <img src={stagesImg} alt="" /> </div>
      </div>
    </div>
  );
};

export default BankRoll;
