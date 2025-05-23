import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import "./Home1.css";
import Box1Img1 from "../../assets/images/homeBox1Img1.png";
import Box1Img2 from "../../assets/images/homeBox1Img2.png";

const Home1 = () => {
  const containerRef1 = useRef(null);
  const containerRef2 = useRef(null);
  const [homeData, setHomeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from API
    const fetchHomeData = async () => {
      try {
        const response = await fetch("https://fundedwagers.io/migrate/admin/api/home");
        const data = await response.json();
        
        if (data.result) {
          setHomeData(data.home[0]); // Assuming only one item exists
        } else {
          throw new Error("Failed to fetch data");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchHomeData();
  }, []);

  useEffect(() => {
    const animateScroll = (containerRef) => {
      if (containerRef.current) {
        const containerHeight = containerRef.current.scrollHeight;
        gsap.to(containerRef.current, {
          y: -containerHeight / 2,
          duration: 20,
          ease: "linear",
          repeat: -1,
          yoyo: true,
        });
      }
    };

    requestAnimationFrame(() => {
      animateScroll(containerRef1);
      animateScroll(containerRef2);
    });
  }, []);

  return (
    <div className="Home1-main">
      <div className="Home1-content">
        <div className="home1-left">
        {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error: {error}</p>
          ) : (
            <>
              <span style={{ letterSpacing: "1px" }}>
                {homeData?.home_title}
              </span>
            <h5 dangerouslySetInnerHTML={{ __html: homeData?.home_description }}></h5>

            </>
          )}

          <div className="btn-home1">
            <a style={{ textDecoration: "none" }} href="https://fundedwagers.io/migrate#challenges" className="btn-white2 relative" >
              <span className="text-center font-bold text-gradient get_btn"> Get Funded</span>
            </a>
          </div>
        </div>
        {/* -------------------------------------- */}
        <div className="home1-right">
          <div className="home1-Container">
            <div className="Container-leftContent">
              <div
                className="scroll-div"
                ref={containerRef1}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  position: "absolute",
                  top: "0",
                }}
              >
                <div className="Box1">
                  <div className="b1T">
                    <img src={Box1Img1} alt="" />

                    <h6> New York <br /> Jets</h6>
                    <h6> <span style={{ fontWeight: "700" }}> VS</span> <br /> NFL </h6>
                    <h6>
                      Miami <br />
                      Dolphin
                    </h6>
                    <img src={Box1Img2} alt="" />
                  </div>
                  <div className="b1T">
                    <div className="WL">
                      <small style={{ backgroundColor: "green" }}>W</small>
                      <small style={{ backgroundColor: "red" }}>L</small>
                      <small style={{ backgroundColor: "green" }}>W</small>
                      <small style={{ backgroundColor: "red" }}>L</small>
                      <small style={{ backgroundColor: "green" }}>W</small>
                    </div>
                    |
                    <div className="WL">
                      <small style={{ backgroundColor: "red" }}>L</small>
                      <small style={{ backgroundColor: "red" }}>L</small>
                      <small style={{ backgroundColor: "red" }}>L</small>
                      <small style={{ backgroundColor: "yellow" }}>D</small>
                      <small style={{ backgroundColor: "green" }}>W</small>
                    </div>
                  </div>
                  <div className="b1T">
                    <h6>
                      <span style={{ fontWeight: "600" }}> 1</span>
                    </h6>
                    <h6>Ranking</h6>
                    <h6>
                      <span style={{ fontWeight: "600" }}> 3</span>
                    </h6>
                  </div>
                </div>

                <div className="Box2" style={{ color: "rgba(255, 255, 255, 0.6)" }}>
                  <h6 style={{ fontWeight: "400" }}>Challenge Info</h6>
                  <div className="Bone">
                    <small>Time Remaining</small>
                    <h4>
                      <span>2</span>
                      <span>2</span>:<span>4</span>
                      <span>9</span>:<span>0</span>
                      <span>7</span>
                    </h4>
                  </div>
                  <div className="Bone">
                    <small>Start Date</small>
                    <small>15/08/15</small>
                  </div>

                  <div className="Bone">
                    <small>End Date</small>
                    <small>15/08/15</small>
                  </div>

                  <div className="Bone">
                    <small>Challenge</small>
                    <small>$5k Strategy Test</small>
                  </div>
                  <div className="Bone">
                    <small>Account Size</small>
                    <small>$200,000,00</small>
                  </div>

                  <div className="Bone">
                    <small>Profit</small>
                    <small
                      style={{
                        fontWeight: "600",
                        fontSize: "1.2vmax",
                        color: "#f7c00cbb",
                      }}
                    >
                      $19,213,.23
                    </small>
                  </div>
                </div>

                <div className="Box3">
                  <div className="single-pic">
                    <div>Single Pick</div>
                    <div>Multi Pick</div>
                  </div>

                  <div style={{ padding: "1vmax" }} className="amount-box">
                    <div className="d-flex align--items-center justify-content-between">
                      <span style={{ fontSize: "18px" }}>
                        Roma - Atlanta
                      </span>
                      <a href="#" style={{cursor:"default"}}>
                        <img
                          loading="lazy"
                          alt="close"
                          src="https://fanfunded.io/wp-content/themes/fanfunded-wp-theme/img/close-i.svg"
                        />
                      </a>
                    </div>
                    <small style={{ color: "rgba(255, 255, 255, 0.6)" }}>
                      3 way match picking
                    </small>
                    <div className="d-flex align-items-center justify-content-between draw-line mt-2">
                      <span>Draw</span>
                      <span>3.10</span>
                    </div>
                    <div className="pic-am">
                      <h6>Pick Amount</h6>
                      <div className="max-box d-flex items-center justify-content-between">
                        <label>$100</label>
                        <span className="max-in">Max</span>
                      </div>
                    </div>
                  </div>
                  <div style={{ padding: "1vmax" }} className="count-box">
                    <div className="d-flex justify-content-between space-p">
                      <span>Total Odd</span>
                      <span>28.7</span>
                    </div>
                    <div className="d-flex justify-content-between space-p">
                      <span>Possible Win:</span>
                      <span>280.7 USD</span>
                    </div>
                  </div>
                  <div style={{ padding: "1vmax" }} className="bg-t-color-box">
                    <div className="d-flex justify-content-between">
                      <a style={{ textDecoration: "none", cursor: "default" }} href="" className="border-btn-white text-white"  >
                        <span>Clear</span>
                      </a>
                      <a
                        style={{ textDecoration: "none", cursor: "default" }}
                        href=""
                        className="gradient-btn text-white text-center"
                      >
                        <span>Place Pick</span>
                      </a>
                    </div>

                    <div className="d-flex justify-content-between mt-4 align-items-center">
                      <span className="text-white text-18 ">
                        Accept all odds changes
                      </span>
                      <div className="toggle-checkbox-wrapper">
                        <input
                          style={{ cursor: "default" }}
                          className="toggle-checkbox"
                          type="checkbox"
                          id="toggle"
                        />
                        <label className="slider-btn" htmlFor="toggle"></label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="Box4">
                  <div className="card-box">
                    <div className="pb-4">
                      <div className="w-100">
                        <div className="text-center w-100 mb-8">
                          <img
                            loading="lazy"
                            alt="logo"
                            src="https://fanfunded.io/wp-content/themes/fanfunded-wp-theme/img/picker.png"
                            className="inline-block"
                          />
                        </div>

                        <div className="list-section d-flex justify-content-between align-items-center mb-3">
                          <div>
                            <h3
                              style={{
                            
                                gap: "0.3vmax",
                                fontWeight: "lighter",
                              }}
                              className="  mb-2  tracking-wide d-flex"
                            >
                              <img
                                loading="lazy"
                                alt="football"
                                src="https://fanfunded.io/wp-content/themes/fanfunded-wp-theme/img/ph_football.svg"
                                className="mr-2"
                              />
                              Minnesota Vikings
                            </h3>
                            <p
                              style={{
                               color: "rgba(255, 255, 255, 0.8)",
                                fontWeight: "lighter",
                               
                              }}
                              className=" mb-2"
                            >
                              Minnesota Vikings Vs Chicago Bears
                            </p>
                            <span className="text-one-two">1x2</span>
                          </div>
                          <div
                            style={{ fontWeight: "700" }}
                          >
                            2.5
                          </div>
                        </div>

                        <div className="list-section d-flex justify-content-between align-items-center mb-3">
                          <div>
                            <h3
                              style={{
                            
                                gap: "0.3vmax",
                                fontWeight: "lighter",
                              }}
                              className="text-white  mb-2  tracking-wide d-flex"
                            >
                              <img
                                loading="lazy"
                                alt="football"
                                src="https://fanfunded.io/wp-content/themes/fanfunded-wp-theme/img/ph_football.svg"
                                className="mr-2"
                              />
                              Dallas Cowboys
                            </h3>
                            <p
                              style={{
                                color: "rgba(255, 255, 255, 0.8)",
                                fontWeight: "lighter",
                               
                              }}
                              className="text-14 mb-2"
                            >
                              Dallas Cowboys Vs Seattle Seahawks
                            </p>
                            <span className="text-one-two">1x2</span>
                          </div>
                          <div
                            style={{ fontWeight: "700" }}
                          >
                            1.89
                          </div>
                        </div>

                        <div className="list-section d-flex justify-content-between align-items-center mb-3">
                          <div>
                            <h3
                              style={{
                                
                                gap: "0.3vmax",
                                fontWeight: "lighter",
                              }}
                              className="text-white  mb-2  tracking-wide d-flex"
                            >
                              <img
                                loading="lazy"
                                alt="football"
                                src="https://fanfunded.io/wp-content/themes/fanfunded-wp-theme/img/ph_football.svg"
                                className="mr-2"
                              />
                              New York Jets
                            </h3>
                            <p
                              style={{
                                color: "rgba(255, 255, 255, 0.8)",
                                fontWeight: "lighter",
                             
                              }}
                              className="text-14 mb-2"
                            >
                              New York Jets Vs Atlanta Falcons
                            </p>
                            <span className="text-one-two">1x2</span>
                          </div>
                          <div
                            style={{ fontWeight: "700"}}
                          >
                            1.15
                          </div>
                        </div>

                        <div className="d-flex align-items-center justify-content-between mt-y-40 mb-3"   style={{
                            
                                fontWeight: "700",
                          
                              }}  >
                          <span className="count" >10 $</span>
                          <span className="count ">10</span>
                          <span className="count ">100</span>
                          <span className="count ">1,000</span>
                          <span className="count ">10,000</span>
                        </div>

                        <div className="d-flex justify-content-between "style={{
                               color: "rgba(255, 255, 255, 0.8)",
                                fontWeight: "lighter"
                               
                              }}>
                          <span>Total Odds</span>
                          <span>19.24</span>
                        </div>

                        <div className="d-flex justify-content-between  mt-1" style={{
                               color: "rgba(255, 255, 255, 0.8)",
                                fontWeight: "lighter"
                               
                              }}>
                          <span>Total Pick</span>
                          <span>10 $</span>
                        </div>

                        <div className="d-flex justify-content-between font-bold  mt-1">
                          <span className="text-white font-bold  text-18 letter-space3">
                            Potential Win
                          </span>
                          <span className="text-white font-bold  text-18 letter-space3">
                            192.4 $
                          </span>
                        </div>

                        <div className="d-flex justify-content-center mt-4 align-items-center">
                          <a
                            style={{ textDecoration: "none" ,cursor:"default" }}
                            href=""
                            className="gradient-btn text-white text-center"
                          >
                            <span>Place Pick</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ----------------------------------------------------------- */}
            <div className="Container-leftContent">
              <div
                className="scroll-div"
                ref={containerRef2}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  position: "absolute",
                  top: "0",
                }}
              >
                <div className="Box8">
                  <div className="card-box mb-2">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <div className="d-flex align-items-center">
                        <img
                          loading="lazy"
                          alt="football"
                          src="https://fanfunded.io/wp-content/themes/fanfunded-wp-theme/img/ph_football.svg"
                          className="me-2"
                        />{" "}
                        NFL
                      </div>
                      <div>
                        <img
                          loading="lazy"
                          alt="coin"
                          src="https://fanfunded.io/wp-content/themes/fanfunded-wp-theme/img/gridicons_stats.png"
                        />
                      </div>
                    </div>

                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <div className="text-white fw-bold">22’1st half</div>
                      <div>
                        <img
                          loading="lazy"
                          alt="coin"
                          src="https://fanfunded.io/wp-content/themes/fanfunded-wp-theme/img/fluent_live-20-filled.svg"
                        />
                      </div>
                    </div>

                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <div className="d-flex align-items-center">
                        <img
                          loading="lazy"
                          alt="football"
                          src="https://fanfunded.io/wp-content/themes/fanfunded-wp-theme/img/fc.png"
                          className="me-2"
                        />{" "}
                        Arizona Cardinals
                      </div>
                      <div>
                        <label>0</label>
                      </div>
                    </div>

                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <div className="d-flex align-items-center">
                        <img
                          loading="lazy"
                          alt="football"
                          src="https://fanfunded.io/wp-content/themes/fanfunded-wp-theme/img/fc2.png"
                          className="me-2"
                        />{" "}
                        Pittsburgh Steelers
                      </div>
                      <div>
                        <label>0</label>
                      </div>
                    </div>

                    <div className="mb-3">
                      <span>1x2</span>
                    </div>

                    <div className="betting-container">
                      {/* Arizona */}
                      <div className="bet-box">
                        <input type="text" value="Arizona" readOnly />
                        <span>9.5</span>
                      </div>

                      {/* Draw */}
                      <div className="bet-box draw-box">
                        <input type="text" value="Draw" readOnly />
                        <span>6.0</span>
                      </div>

                      {/* Pittsburgh */}
                      <div className="bet-box">
                        <input type="text" value="Pittsburgh" readOnly />
                        <span>1.29</span>
                      </div>

                      {/* Dropdown */}
                      <div className="dropdown">
                        <img
                          src="https://fanfunded.io/wp-content/themes/fanfunded-wp-theme/img/bxs_up-arrow.svg"
                          alt="Dropdown"
                        />
                        {/* <div className="dropdown-menu">
          <a href="#">Action</a>
          <a href="#">Another Action</a>
          <a href="#">Something Else</a>
        </div> */}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="Box5">
                  <h6>
                    Want To Place <br /> A Winning Pick?
                  </h6>
                  <button className="join-btn">Join Now</button>
                  <button
                    style={{ cursor: "default" }}
                    className="gradient-btn text-white text-center"
                  >
                    Login
                  </button>
                </div>

                <div className="Box7">
                  <div className="list-time-and-day">
                    <div className="text-center">
                      <div className="time">07:30 PM</div>
                      <div style={{ color: "#6b6b6b", fontSize: "1vmax" }}>
                        19 Apr
                      </div>
                    </div>
                    <div className="name-home">
                      <div>Indiana Pacers</div>
                      <div>Portland Trail Blazers</div>
                    </div>
                  </div>

                  <div className="list-time-and-day">
                    <div className="text-center">
                      <div className="time">09:45 PM</div>
                      <div style={{ color: "#6b6b6b" }}>
                        19 Apr
                      </div>
                    </div>
                    <div className="name-home">
                      <div>Detroit Pistons</div>
                      <div>Washington Wizards</div>
                    </div>
                  </div>
                  <div className="list-time-and-day">
                    <div className="text-center">
                      <div className="time">05:15 PM</div>
                      <div style={{ color: "#6b6b6b" }}>
                        19 Apr
                      </div>
                    </div>
                    <div className="name-home">
                      <div>Philadelphia 76ers</div>
                      <div>Los Angeles Lakers</div>
                    </div>
                  </div>
                  <div className="list-time-and-day">
                    <div className="text-center">
                      <div className="time">02:30 PM</div>
                      <div style={{ color: "#6b6b6b"}}>
                        19 Apr
                      </div>
                    </div>
                    <div className="name-home">
                      <div>Utah Jazz</div>
                      <div>New Orleans Pelicans</div>
                    </div>
                  </div>
                  <div className="list-time-and-day">
                    <div className="text-center">
                      <div className="time"> 11:30 PM</div>
                      <div style={{ color: "#6b6b6b" }}>
                        19 Apr
                      </div>
                    </div>
                    <div className="name-home">
                      <div>Los Angeles Clippers</div>
                      <div>Denver Nuggets</div>
                    </div>
                  </div>

                  <div className="list-time-and-day">
                    <div>More Events</div>
                    <div className="name-home">
                      <img
                        loading="lazy"
                        alt="icon"
                        src="https://fanfunded.io/wp-content/themes/fanfunded-wp-theme/img/Union.svg"
                        className="ml-2"
                      />
                    </div>
                  </div>
                </div>

                <div className="Box6">
                  <div className="card-time text-center mb-4">
                    <div className="card-time-mid">
                      <h5>Time Of Possession</h5>
                      <div className="play-score">
                        <div>
                          <span
                            style={{
                              color: "#f7c00cbb",
                             
                              fontWeight: "600",
                            }}
                          >
                            85%
                          </span>
                          <br />
                          <span>03:17</span>
                        </div>
                        <div
                          className="boxx"
                          style={{ "--p1": "89%", "--p2": "10%" }}
                        >
                          <img
                            loading="lazy"
                            alt="ball"
                            src="https://fanfunded.io/wp-content/themes/fanfunded-wp-theme/img/ball-in.svg"
                          />
                        </div>
                        <div>
                          <span
                            style={{  fontWeight: "600" }}
                          >
                            15%
                          </span>
                          <br />
                          <span>00:05</span>
                        </div>
                      </div>

                      <div className="turnover">
                        <span>0</span>
                        <span>Turnovers</span>
                        <span>0</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="Box9">
                  <div>
                    <div className="d-flex align-items-center justify-content-between frame-head ">
                      <div className="d-flex align-items-center justify-content-between">
                        <img
                          loading="lazy"
                          alt="ball"
                          src="https://fanfunded.io/wp-content/themes/fanfunded-wp-theme/img/v-ball.png"
                          className="me-2"
                        />
                        <span className="tag-default _green">Win</span>
                      </div>

                      <div>
                        <span>
                          Nov 20, 2:56 PM
                        </span>
                      </div>
                    </div>

                    <div>
                      <div className="mt-3">
                        <div style={{color: "rgba(255, 255, 255, 0.8)"}}>
                          <span className="square"></span>
                          MIN Vikings - DEN Broncos
                        </div>
                        <h6 style={{ color: "rgba(255, 255, 255, 0.8)", fontWeight: "400" }}>
                          Match Winner 2-Way
                        </h6>
                        <div className="d-flex align-items-center justify-content-between mt-3"   style={{
                              
                                color: "rgba(255, 255, 255, 0.8)",
                                fontWeight: "700",
                              }}>
                          <span>DEN Broncos </span>
                          <span>1.71</span>
                        </div>
                      </div>
                      <div className="mt-4">
                        <div
                          style={{color: "rgba(255, 255, 255, 0.8)",  fontWeight: "400" }}
                          className="d-flex align-items-center justify-content-between"
                        >
                          <span>Total Odds</span>
                          <span>1.909</span>
                        </div>
                        <div
                          style={{color: "rgba(255, 255, 255, 0.8)",  fontWeight: "400" }}
                          className="d-flex align-items-center justify-content-between"
                        >
                          <span>Total Stack</span>
                          <span>
                            21{" "}
                            <img
                              loading="lazy"
                              alt="icon"
                              src="https://fanfunded.io/wp-content/themes/fanfunded-wp-theme/img/tabler_coins.svg"
                              className="ml-2"
                            />
                          </span>
                        </div>
                        <div
                          style={{color: "rgba(255, 255, 255, 0.8)",  fontWeight: "400" }}
                          className="d-flex align-items-center justify-content-between"
                        >
                          <span>Payout</span>
                          <span>
                            40.089{" "}
                            <img
                              loading="lazy"
                              alt="icon"
                              src="https://fanfunded.io/wp-content/themes/fanfunded-wp-theme/img/tabler_coins.svg"
                              className="ml-2"
                            />
                          </span>
                        </div>
                      </div>

                      <div className="mt-4">
                        <div className="d-flex align-items-center justify-content-between">
                          <input className="thin-text" type="text" value="ID" />
                          <span>
                            <img
                              loading="lazy"
                              alt="icon"
                              src="https://fanfunded.io/wp-content/themes/fanfunded-wp-theme/img/tabler_copy3.svg"
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="height-space"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home1;
