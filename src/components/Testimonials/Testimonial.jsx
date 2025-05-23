import React from 'react';
import './Testimonial.css';

const testimonials = [
  { name: 'Muhammad', message: 'This is by far one of the very best firm out there. I purchased the 50k expert plan before & I’m looking to get another one soon considering the freedom you receive. The support is exceptional & I’m grateful for the giveaways they offer & the opportunities that they provide. Overall, great experience :)' },
  { name: 'Raul Ciuhat', message: 'Thanks to MyFundedFutures.com, I’ve not only enhanced my trading skills but also seen a significant improvement in my trading outcomes. I highly recommend this platform to anyone serious about futures trading. It’s a game-changer!' },
  { name: 'Kaiiven', message: 'It’s the best support team I’ve ever encountered. You will have a reply within literal MINUTES and be assisted with whatever you may need even if it seems trivial. Akhi assisted me today and was phenomenal. Could not recommend this firm any more highly!' },
  { name: 'Jorge Peralta', message: 'My funded futures support was incredible and reached out to help me with my situation and I was able to get my account back, they’re support is next level and I really appreciate it. This is a Prop firm that cares about its traders!! 5 stars!' },
  { name: 'Raul Ciuhat', message: 'My funded futures support was incredible and reached out to help me with my situation and I was able to get my account back, they’re support is next level and I really appreciate it. This is a Prop firm that cares about its traders!! 5 stars!' },
  { name: 'J K', message: 'MFFU is, in my opinion, THE BEST. Ok, so you have to wait 14 days for a withdraw, but consistency does not care if the withdraw period is 5,10,14 days. Choose your trades carefully. Being able to withdraw all your profits, to the buffer, shows the integrity of MFFU. Thank you MFFU.' },
  { name: 'Anatoliy M', message: 'The best futures prop firm to trade with. The rules are easy to follow. The website UI is super good. The price of a challenge account is good. Costomer support is the best, they helped me resolve an issue within minutes through email. 10/10 Futures propfirm' },
  {name:"Kahlil Cheeks", message:"Took the time to explain in great detail what I should expect after passing my first MFF eval. Far more understandable than trying to watch a million youtube videos to figure it out on my own. Really appreciate the clarity and time taken!"},
  {name:"Francis Dogbey", message:"My Funded Futures customer first approach in solving any issues that arise with speed is very impressive"},
  {name:"Brice Charles", message:"Had an issue with my payment and support was able to resolve it and they were also able to add my previous coupon code thanks myfundedfutures"},

];

const getInitials = (name) =>
  name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();

const Testimonial = () => {
  return (
    <>
   <div className='zigzag-section'>

    <div className="zigzag-section ">
    
    <h2 className="testimonial-heading">
   <span style={{color:"#DBB66B"}}>Loved</span>  by bettors worldwide.
  </h2>
      {[0, 1, 2].map((rowIndex) => (
        <div
          key={rowIndex}
          className={`marquee-row ${rowIndex % 2 === 0 ? 'rtl' : 'ltr'}`}
        >
          <div className="marquee-track ">
            {testimonials.map((t, i) => (
             <div className="testimonial-card" key={i}>
             <div>
               <div className="avatar-name-row">
                 <div className="avatar">{getInitials(t.name)}</div>
                 <h4 className="name">{t.name}</h4>
               </div>
               <p className="message">{t.message}</p>
             </div>
           </div>
           
            ))}
          </div>
        </div>
      ))}
     </div>
    </div>
    </>
  );
};

export default Testimonial;
