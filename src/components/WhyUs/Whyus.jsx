import React, { useEffect, useState } from "react";
import {
  FaBullseye,
  FaHandshake,
  FaListOl,
  FaGavel,
  FaGlobe,
  FaLightbulb,
  FaShieldAlt,
  FaChartLine,
  FaUsers,
  FaClock
} from "react-icons/fa";
import './Whyus.css'
const iconList = [
  <FaBullseye />, <FaHandshake />, <FaListOl />, <FaGavel />, <FaGlobe />,
  <FaLightbulb />, <FaShieldAlt />, <FaChartLine />, <FaUsers />, <FaClock />
];

const Whyus = () => {
  const [whyUsData, setWhyUsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWhyUs = async () => {
      try {
        const response = await fetch("https://fundedwagers.io/migrate/admin/api/why-us");
        const data = await response.json();

        if (data.result) {
          setWhyUsData(data.why_us);
        } else {
          throw new Error("Failed to fetch data");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWhyUs();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="comparison-section">
      <h2 className="comparison-heading">{whyUsData[0]?.why_us_title || "Why Us?"}</h2>
      <p
        className="comparison-subheading"
        dangerouslySetInnerHTML={{ __html: whyUsData[0]?.why_us_description }}
      ></p>

      <div className="comparison-container scrollable-blur">
        {whyUsData.map((item, index) => (
          <div className="comparison-row" key={item.id || index}>
            <div className="comparison-left">{item.why_us_box_title}</div>
            <div className="comparison-right">
              <span className="list-icon">{iconList[index]}</span>
              {item.why_us_box_description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Whyus;
