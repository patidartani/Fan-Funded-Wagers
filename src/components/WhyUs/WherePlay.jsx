import "./WherePlay.css"
import mapImg from "../../assets/images/map2.jpeg"
import punchBall from "../../assets/images/football_img.png"
import new2 from "../../assets/images/new_2.png"
import React, { useEffect, useState } from "react"; 


const WherePlay = () => {

   const [wherePlay, setWherePlay] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

     useEffect(() => {
        // Fetch data from API
        const fetchWherePlay = async () => {
          try {
            const response = await fetch("https://fundedwagers.io/migrate/admin/api/where-play");
            const data = await response.json();
    
            if (data.result) {
              setWherePlay(data.where_play); // Use the array directly
            } else {
              throw new Error("Failed to fetch data");
            }
          } catch (error) {
            setError(error.message);
          } finally {
            setLoading(false);
          }
        };
    
        fetchWherePlay();
      }, []);

  return (
    <div className='WherePlay-main'>
      {/* <div className="background-image">
        <img src={punchBall} alt="punchball" className="bg-left-imgs" />
        <img src={new2} alt="" className="bg-new" />
      </div> */}

      <div className="where">

        <div className="where-top">
         
        {loading ? (
    <p>Loading...</p>
  ) : error ? (
    <p>Error: {error}</p>
  ) : wherePlay.length > 0 ? (
    <h1>
      <span className="bg-bottom-right">
        {wherePlay[0]?.where_play_title}
      </span>
    </h1>
  ) : (
    <p>No data available</p>
  )}
        </div>

        <div className="where-btm">
          <img src={mapImg} alt="" />
          {/* <img className="res-map-img" src="https://fanfunded.io/wp-content/themes/fanfunded-wp-theme/img/map-mobile.png" alt="" /> */}
          <div className="where-text">
            <h2>Global Access to the World
           </h2>
           <p>At Funded Wagers, we're proud to offer a world-class selection of sports and leagues, empowering you to put expertise to the test - no matter where you call home.</p>
           <div className="where-btn">
  <a href="#challenges" style={{ textDecoration: "none" }} className="btn-where2 relative">
    <span className="text-center font-bold text-gradient">Explore our Selections</span>
  </a>
</div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default WherePlay