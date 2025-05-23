import "./Rewards.css";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import sport1 from "../../assets/images/sport1.png";
import sport2 from "../../assets/images/sport2.png";
import sport3 from "../../assets/images/sport3.png";
import sport4 from "../../assets/images/sport4.png";
import sport5 from "../../assets/images/sport5.png";
import sport6 from "../../assets/images/sport6.png";
import sport7 from "../../assets/images/sport7.png";
import sport8 from "../../assets/images/sport8.png";
const sportsData = [
 
  { title: "Baseball", image: sport1 },
  { title: "UFC", image: sport2 },
  { title: "Basketball", image: sport3 },
  { title: "Soccer", image: sport4 },

  { title: "Golf", image: sport5 },       
  { title: "Football", image: sport6 },
  { title: "Ice Hockey", image: sport7 },
  { title: "Baseball", image: sport8 },
];

const Rewards = () => {
  const [rewardsData, setRewardsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRewards = async () => {
      try {
        const response = await fetch(
          "https://fundedwagers.io/migrate/admin/api/reward"
        );
        const data = await response.json();

        if (data.result) {
          setRewardsData(data.reward);
        } else {
          throw new Error("Failed to fetch data");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRewards();
  }, []);

  const extractParagraphs = (html) => {
    if (!html) return [];

    const paragraphs = html.replace(/&nbsp;/g, " ").match(/<p>(.*?)<\/p>/g);

    if (paragraphs) {
      return paragraphs.map((p) => p.replace(/<\/?p>/g, "").trim());
    }

    return [html];
  };

  const sliderSettings = {
    infinite: true,
    speed: 6000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <div className="Rewards-main">
      <div className="Rewards">
    
      <div className="Rewards-top">
  {loading ? (
    <p>Loading...</p>
  ) : error ? (
    <p>Error: {error}</p>
  ) : rewardsData.length > 0 ? (
    <h2
      className="sports-section"
      dangerouslySetInnerHTML={{ __html: rewardsData[0]?.reward_title || "" }}
    />
  ) : (
    <p>No data available</p>
  )}
</div>



        <div className="sports-section">
          {/* <h2>More Sports. <span style={{color:"#DBB66B"}}>  More Action</span>
         </h2> */}
          <Slider {...sliderSettings}>
            {sportsData.map((sport, index) => (
              <div key={index} className="sport-card">
                 <h3>{sport.title}</h3>
                <img src={sport.image} alt={sport.title} />
               
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Rewards;
