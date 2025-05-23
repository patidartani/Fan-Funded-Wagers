import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import image1 from "../../assets/images/new_img.png";
import image2 from "../../assets/images/new.png";
import image3 from "../../assets/images/new3.png";
import "./Slots.css";
import { useNavigate } from "react-router-dom";

const Slots = () => {
  const navigate = useNavigate();
  const [slotData, setSlotData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from API
    const fetchSlotData = async () => {
      try {
        const response = await fetch(
          "https://fundedwagers.io/migrate/admin/api/challenge"
        );
        const data = await response.json();

        if (data.result) {
          setSlotData(data.challenge); // Use the array directly
        } else {
          throw new Error("Failed to fetch data");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSlotData();
  }, []);

  // Map images to each challenge step
  const challengeImages = [image1, image2, image3];

  return (
    <div className="main-slot">
      <div className="slot_box" id="slots">
        <Container>
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error: {error}</p>
          ) : (
            slotData.map((challenge, index) => (
              <div className="sticky-box">
             
                <Row
                  className="align-items-center slot_heading" key={challenge.id} >
                  <Col md={6}>
                    <h3>{`0${index + 1}`}</h3>
                   
                    <h2  dangerouslySetInnerHTML={{ __html: challenge.challenge_title }}></h2>
                    <p dangerouslySetInnerHTML={{ __html: challenge.challenge_description }}></p>
                  </Col>
                  <Col md={6}>
                    <img src={challengeImages[index] || image1}  alt={`Challenge ${index + 1}`} className="img-fluid rounded" />
                  </Col>
                </Row>
              </div>
            ))
          )}
        </Container>
      </div>
    </div>
  );
};

export default Slots;
