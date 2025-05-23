import "./SportsThrill.css";
import countImg from "../../assets/images/count1.png";
import React, { useEffect, useState } from "react";

const SportsThrill = () => {
  const [sportsThrill, setSportsThrill] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from API
    const fetchSportsThrill = async () => {
      try {
        const response = await fetch(
          "https://fundedwagers.io/migrate/admin/api/sport"
        );
        const data = await response.json();

        if (data.result) {
          setSportsThrill(data.sport); // Use the array directly
        } else {
          throw new Error("Failed to fetch data");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSportsThrill();
  }, []);

  return (
    <div className="SportsThrill-main">
      <div className="SportsThrill">
        <div className="SportsThrill-top">
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error: {error}</p>
          ) : sportsThrill.length > 0 ? (
            <h1 className="text-lg_big mb-4">
              <span className="bg-bottom-right">
                {sportsThrill[0]?.sport_title}
              </span>
            </h1>
          ) : (
            <p>No data available</p>
          )}
        </div>

        <div className="SportsThrill-mid">
          <div className="ST1">
            <img src={countImg} alt="" />
            <div className="countt ">
              <h5>195+</h5>
              <span>Countries Covered</span>
            </div>
          </div>
          <div className="ST1">
            <img src={countImg} alt="" />

            <div className="countt">
              <h5>24/7</h5>
              <span>Coverage</span>
            </div>
          </div>
          <div className="ST1">
            <img src={countImg} alt="" />

            <div className="countt">
              <h5>1000+</h5>
              <span>Teams</span>
            </div>
          </div>
        </div>

        <div className="SportsThrill-btm mt-5">
          <div className="ST-left">
            <h5 className="real-time-data">Real Time Data</h5>
          </div>
          <div className="ST-right">
            <div>
              <img
                src="https://fanfunded.io/wp-content/themes/fanfunded-wp-theme/img/ESPN.svg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://fanfunded.io/wp-content/themes/fanfunded-wp-theme/img/NBC-Sports-svg.png"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://fanfunded.io/wp-content/themes/fanfunded-wp-theme/img/CBS-Sports-svg.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportsThrill;
