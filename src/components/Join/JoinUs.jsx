import React from 'react'
import "./JoinUs.css"
import TsHIRT from "../../assets/images/frame5.png"
import rocket_img from "../../assets/images/rocket.png"
import discordLogo from "../../assets/images/frame_join.png"; 

const JoinUs = () => {
  return (
    // <div className='JoinUs-main'>
    //   <div className="bg-img">
    //     <img className='bg-rocket' src={rocket_img} alt="" />
    //   </div>
    //       <div className="Join-us">

    //              <div className="Join-top">
    //                 <img src={TsHIRT} alt=""  />
    //                 <div className="join-text">
    //                 <h2>Join Our Community of <br /> Fans</h2>
    //                 <div className="join-btn">
    //                 <a style={{ textDecoration: "none" }} href="" className="btn-join relative">
    //                     <span className="text-center font-bold text-gradient ">JOIN DISCORD</span>
    //                 </a>
    //                 </div>
    //                 </div>
    //               </div>

    //               <div className="join-btm">
    //                  <div className="j-left">
    //                     <h6>stay up to date</h6>
    //                     <h4>Our Newsletter</h4>
    //                  </div>
    //                  <div className="j-right">
    //                      <form>
    //                          <img src="https://fanfunded.io/wp-content/themes/fanfunded-wp-theme/img/email-field1.svg" alt="" />
    //                           <div className='form-data'>
    //                           <input type="text" placeholder='Email'/>
    //                           <button>SUBMIT</button>
    //                           </div>
    //                      </form>
    //                  </div>
    //               </div>

    //       </div>
    // </div>

    <div className="join-community ">
      
    <div className="join-left">
      <h1>
      <strong>Join our</strong>   <br /> <strong>community</strong>
      </h1>
      <div className="stats">
        <div className="stat">
          <strong className="gradient-text">72K+</strong>
          <span>active users</span>
        </div>
        <div className="stat">
          <strong className="gradient-text">10+</strong>
          <span>themed chats</span>
        </div>
        <div className="stat">
          <strong className="gradient-text">Promotions</strong>
          <span>every month</span>
        </div>
      </div>
      <button className="join-button">Join MFFU Discord</button>
    </div>
    <div className="join-right">
      <img src={discordLogo} alt="Discord Logo" />
    </div>
  </div>
  )
}

export default JoinUs