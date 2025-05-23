import "./Challanges.css";
import { useState, useEffect } from "react";
import LeftImg from "../../assets/images/football_position.png";
import LeftLineImg from "../../assets/images/v-line2.png";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";

const Challenges = () => {

  const navigate = useNavigate();
  const [selectedMoney, setSelectedMoney] = useState("1000");
  const [selectedPhase, setSelectedPhase] = useState("Phase1");
  const [selectedPhaseData, setSelectedPhaseData] = useState({});
  // const userId = useSelector((state) => state.user.userId);
  const userId = useSelector((state) => state.user?.userId);

  // console.log("user id/login id", userId)

  const challengeFees1 = {
    1000: "49.99", 5000: "169.99", 10000: "329.99", 25000: "549.99", 50000: "879.99", 100000: "1099.99",
  };

  const [selectedAddOns, setSelectedAddOns] = useState([]);
  const addOnValue = 20;

  const toggleAddOn = (addOn) => {
    setSelectedAddOns((prevSelected) => prevSelected.includes(addOn) ? prevSelected.filter((item) => item !== addOn) : [...prevSelected, addOn]
    );
  };

  const calculateTotalFee = () => {
    const baseFee = parseFloat(challengeFees1[selectedMoney]);
    const totalAddOnValue = selectedAddOns.length * addOnValue;
    const percentageValue = (totalAddOnValue / 100) * baseFee;
    return (baseFee + percentageValue).toFixed(2);
  };

  const challengeData = {
    1000: { Phase1: { minPick: "20 Picks", minAmount: "10", maxAmount: "50", maxLoss: "150", maxDailyLoss: "100", profitTarget: "200", timeLimit: "30 Days",
      },
      Phase2: {
        minPick: "20 Picks",
        minAmount: "10",
        maxAmount: "50",
        maxLoss: "150",
        maxDailyLoss: "100",
        profitTarget: "200",
        timeLimit: "60 Days",
      },
      Funded: {
        minPick: "20 Picks",
        minAmount: "10",
        maxAmount: "50",
        maxLoss: "150",
        maxDailyLoss: "100",
        profitTarget: "N/A",
        timeLimit: "N/A",
      },
    },

    5000: {
      Phase1: {
        minPick: "20 Picks",
        minAmount: "50",
        maxAmount: "250",
        maxLoss: "750",
        maxDailyLoss: "500",
        profitTarget: "1000",
        timeLimit: "30 Days",
      },
      Phase2: {
        minPick: "20 Picks",
        minAmount: "50",
        maxAmount: "250",
        maxLoss: "750",
        maxDailyLoss: "500",
        profitTarget: "1000",
        timeLimit: "60 Days",
      },
      Funded: {
        minPick: "20 Picks",
        minAmount: "50",
        maxAmount: "250",
        maxLoss: "750",
        maxDailyLoss: "500",
        profitTarget: "N/A",
        timeLimit: "N/A",
      },
    },

    10000: {
      Phase1: {
        minPick: "20 Picks",
        minAmount: "100",
        maxAmount: "500",
        maxLoss: "1500",
        maxDailyLoss: "1000",
        profitTarget: "2000",
        timeLimit: "30 Days",
      },
      Phase2: {
        minPick: "20 Picks",
        minAmount: "100",
        maxAmount: "500",
        maxLoss: "1500",
        maxDailyLoss: "1000",
        profitTarget: "2000",
        timeLimit: "60 Days",
      },
      Funded: {
        minPick: "20 Picks",
        minAmount: "100",
        maxAmount: "500",
        maxLoss: "1500",
        maxDailyLoss: "1000",
        profitTarget: "N/A",
        timeLimit: "N/A",
      },
    },

    25000: {
      Phase1: {
        minPick: "20 Picks",
        minAmount: "250",
        maxAmount: "1250",
        maxLoss: "3750",
        maxDailyLoss: "2500",
        profitTarget: "5000",
        timeLimit: "30 Days",
      },
      Phase2: {
        minPick: "20 Picks",
        minAmount: "250",
        maxAmount: "1250",
        maxLoss: "3750",
        maxDailyLoss: "2500",
        profitTarget: "5000",
        timeLimit: "60 Days",
      },
      Funded: {
        minPick: "20 Picks",
        minAmount: "250",
        maxAmount: "1250",
        maxLoss: "3750",
        maxDailyLoss: "2500",
        profitTarget: "N/A",
        timeLimit: "N/A",
      },
    },

    50000: {
      Phase1: {
        minPick: "20 Picks",
        minAmount: "500",
        maxAmount: "2500",
        maxLoss: "7500",
        maxDailyLoss: "5000",
        profitTarget: "10000",
        timeLimit: "30 Days",
      },
      Phase2: {
        minPick: "20 Picks",
        minAmount: "500",
        maxAmount: "2500",
        maxLoss: "7500",
        maxDailyLoss: "5000",
        profitTarget: "10000",
        timeLimit: "60 Days",
      },
      Funded: {
        minPick: "20 Picks",
        minAmount: "500",
        maxAmount: "2500",
        maxLoss: "7500",
        maxDailyLoss: "5000",
        profitTarget: "N/A",
        timeLimit: "N/A",
      },
    },

    100000: {
      Phase1: {
        minPick: "20 Picks",
        minAmount: "1000",
        maxAmount: "5000",
        maxLoss: "15000",
        maxDailyLoss: "10000",
        profitTarget: "20000",
        timeLimit: "30 Days",
      },
      Phase2: {
        minPick: "20 Picks",
        minAmount: "1000",
        maxAmount: "5000",
        maxLoss: "15000",
        maxDailyLoss: "10000",
        profitTarget: "20000",
        timeLimit: "60 Days",
      },
      Funded: {
        minPick: "20 Picks",
        minAmount: "1000",
        maxAmount: "5000",
        maxLoss: "15000",
        maxDailyLoss: "10000",
        profitTarget: "N/A",
        timeLimit: "N/A",
      },
    },
  };

  useEffect(() => {
    setSelectedPhaseData(challengeData[selectedMoney]?.[selectedPhase] || {});
  }, [selectedMoney, selectedPhase]);

  const handleActivate = async () => {
    if (!userId) {
      toast.error("Please log in first!");
      navigate("/login");
      return;
    }

    const h5Name = "Normal";

    // ✅ Convert selected add-ons to an object { addOnName: true/false }
    const selectedAddOnsObject = {
      max_loss_add_on: selectedAddOns.includes("Increase Max Drawdown by 5%"),
      profit_split_add_on: selectedAddOns.includes("Profit Split 80/20"),
      no_time_limit: selectedAddOns.includes("No Time Limit"),
      express_payout: selectedAddOns.includes("Express Payout (Bi-Weekly)"),
    };

    try {
      // console.log("User ID before API call:", userId);

      const response = await axios.post(
        "https://fundedwagers.io/migrate/admin/api/user-challenges-status",
        {
          user_id: Number(userId),
          selected_add_ons: selectedAddOnsObject, // ✅ Pass add-ons as true/false
          addOnValue: addOnValue, // ✅ Pass the add-on value (20)
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      // console.log("API Response:", response.data);

      if (response.data.status === 200 && response.data.active_account) {
        toast.success(response.data.message);
        return;
      }

      if (selectedPhase === response.data.phase || selectedPhase === response.data.phase1) {
        navigate("/payment-detail", {
          state: {
            selectedPhaseData,
            selectedPhase,
            selectedMoney,
            h5Name,
            challengeFee: calculateTotalFee(),
            selectedAddOns: selectedAddOnsObject, 
            addOnValue: addOnValue, 
          },
        });
      }
      if(response.data.phase == selectedPhase){
        toast.success(response.data.message);
      }else{
        toast.success(response.data.message1);
      }
    } catch (error) {
      console.error("API Error:", error);

      if (error.response) {
        console.error("Error Response Data:", error.response.data);
        const apiError = error.response.data?.error;

        if (selectedPhase === "Phase1") {
          navigate("/payment-detail", {
            state: {
              selectedPhaseData,
              selectedPhase,
              selectedMoney,
              h5Name,
              challengeFee: calculateTotalFee(),
              selectedAddOns: selectedAddOnsObject, 
              addOnValue: addOnValue, 
            },
          });
        }

        if (selectedPhase !== "Phase1") {
          toast.error(apiError);
        }
      } else {
        toast.error("Failed to fetch challenge status. Please try again.");
      }
    }
  };

  // const currentData = challengeData[selectedMoney]?.[selectedPhase] || {};
  const [selectedMoney2, setSelectedMoney2] = useState("1000");
  const [selectedPhase2, setSelectedPhase2] = useState("Phase1");
  const [selectedPhaseData2, setSelectedPhaseData2] = useState({});

  const challengeFees = { 1000: "59.99", 5000: "199.99", 10000: "399.99", 25000: "649.99", 50000: "1049.99", 100000: "1349.99" };

  const challengeTwoData = {
    1000: {
      Phase1: {
        minPick: "20 Picks",
        minAmount: "50",
        maxAmount: "100",
        maxLoss: "150",
        maxDailyLoss: "100",
        profitTarget: "200",
        timeLimit: "30 Days",
      },
      Phase2: {
        minPick: "20 Picks",
        minAmount: "50",
        maxAmount: "100",
        maxLoss: "150",
        maxDailyLoss: "100",
        profitTarget: "200",
        timeLimit: "60 Days",
      },
      Funded: {
        minPick: "20 Picks",
        minAmount: "50",
        maxAmount: "100",
        maxLoss: "150",
        maxDailyLoss: "100",
        profitTarget: "N/A",
        timeLimit: "N/A",
      },
    },

    5000: {
      Phase1: {
        minPick: "20 Picks",
        minAmount: "250",
        maxAmount: "500",
        maxLoss: "750",
        maxDailyLoss: "500",
        profitTarget: "1000",
        timeLimit: "30 Days",
      },
      Phase2: {
        minPick: "20 Picks",
        minAmount: "250",
        maxAmount: "500",
        maxLoss: "750",
        maxDailyLoss: "500",
        profitTarget: "1000",
        timeLimit: "60 Days",
      },
      Funded: {
        minPick: "20 Picks",
        minAmount: "250",
        maxAmount: "500",
        maxLoss: "750",
        maxDailyLoss: "500",
        profitTarget: "N/A",
        timeLimit: "N/A",
      },
    },

    10000: {
      Phase1: {
        minPick: "20 Picks",
        minAmount: "500",
        maxAmount: "1000",
        maxLoss: "1500",
        maxDailyLoss: "1000",
        profitTarget: "2000",
        timeLimit: "30 Days",
      },
      Phase2: {
        minPick: "20 Picks",
        minAmount: "500",
        maxAmount: "1000",
        maxLoss: "1500",
        maxDailyLoss: "1000",
        profitTarget: "2000",
        timeLimit: "60 Days",
      },
      Funded: {
        minPick: "20 Picks",
        minAmount: "500",
        maxAmount: "1000",
        maxLoss: "1500",
        maxDailyLoss: "1000",
        profitTarget: "N/A",
        timeLimit: "N/A",
      },
    },

    25000: {
      Phase1: {
        minPick: "20 Picks",
        minAmount: "1250",
        maxAmount: "2500",
        maxLoss: "3750",
        maxDailyLoss: "2500",
        profitTarget: "5000",
        timeLimit: "30 Days",
      },
      Phase2: {
        minPick: "20 Picks",
        minAmount: "1250",
        maxAmount: "2500",
        maxLoss: "3750",
        maxDailyLoss: "2500",
        profitTarget: "5000",
        timeLimit: "60 Days",
      },
      Funded: {
        minPick: "20 Picks",
        minAmount: "1250",
        maxAmount: "2500",
        maxLoss: "3750",
        maxDailyLoss: "2500",
        profitTarget: "N/A",
        timeLimit: "N/A",
      },
    },

    50000: {
      Phase1: {
        minPick: "20 Picks",
        minAmount: "2500",
        maxAmount: "5000",
        maxLoss: "7500",
        maxDailyLoss: "5000",
        profitTarget: "10000",
        timeLimit: "30 Days",
      },
      Phase2: {
        minPick: "20 Picks",
        minAmount: "2500",
        maxAmount: "5000",
        maxLoss: "7500",
        maxDailyLoss: "5000",
        profitTarget: "10000",
        timeLimit: "60 Days",
      },
      Funded: {
        minPick: "20 Picks",
        minAmount: "2500",
        maxAmount: "5000",
        maxLoss: "7500",
        maxDailyLoss: "5000",
        profitTarget: "N/A",
        timeLimit: "N/A",
      },
    },

    100000: {
      Phase1: {
        minPick: "20 Picks",
        minAmount: "5000",
        maxAmount: "10000",
        maxLoss: "15000",
        maxDailyLoss: "10000",
        profitTarget: "20000",
        timeLimit: "30 Days",
      },
      Phase2: {
        minPick: "20 Picks",
        minAmount: "5000",
        maxAmount: "10000",
        maxLoss: "15000",
        maxDailyLoss: "10000",
        profitTarget: "20000",
        timeLimit: "60 Days",
      },
      Funded: {
        minPick: "20 Picks",
        minAmount: "5000",
        maxAmount: "10000",
        maxLoss: "15000",
        maxDailyLoss: "10000",
        profitTarget: "N/A",
        timeLimit: "N/A",
      },
    },
  };

  const [selectedAddOns2, setSelectedAddOns2] = useState([]);
  const addOnValue2 = 20;

  const toggleAddOn2 = (addOn) => {
    setSelectedAddOns2((prevSelected) =>
      prevSelected.includes(addOn)
        ? prevSelected.filter((item) => item !== addOn)
        : [...prevSelected, addOn]
    );
  };

  const calculateTotalFee2 = () => {
    const baseFee = parseFloat(challengeFees[selectedMoney2]);
    const totalAddOnValue = selectedAddOns2.length * addOnValue2;
    const percentageValue = (totalAddOnValue / 100) * baseFee;
    return (baseFee + percentageValue).toFixed(2);
  };

  useEffect(() => {
    setSelectedPhaseData2(
      challengeTwoData[selectedMoney2]?.[selectedPhase2] || {}
    );
  }, [selectedMoney2, selectedPhase2]);

  const handleActivate2 = async () => {
    if (!userId) {
      toast.error("Please log in first!");
      navigate("/login");
      return;
    }

    const h5Name = "Aggressive";

    // ✅ Convert selected add-ons to an object { addOnName: true/false }
    const selectedAddOnsObject2 = {
      max_loss_add_on: selectedAddOns2.includes("Increase Max Drawdown by 5%"),
      profit_split_add_on: selectedAddOns2.includes("Profit Split 80/20"),
      no_time_limit: selectedAddOns2.includes("No Time Limit"),
      express_payout: selectedAddOns2.includes("Express Payout (Bi-Weekly)"),
    };

    try {
      // console.log("User ID before API call:", userId);

      const response = await axios.post(
        "https://fundedwagers.io/migrate/admin/api/user-challenges-status",
        {
          user_id: Number(userId),
          selected_add_ons2: selectedAddOnsObject2, // ✅ Pass add-ons as true/false
          addOnValue2: addOnValue2, // ✅ Pass the add-on value (20)
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      // console.log("API Response:", response.data);

      if (response.data.status === 200 && response.data.active_account) {
        toast.success(response.data.message);
        return;
      }

      if (selectedPhase === response.data.phase || selectedPhase === response.data.phase1) {
        navigate("/payment-detail", {
          state: {
            selectedPhaseData2,
            selectedPhase,
            selectedMoney2,
            h5Name,
            challengeFee: calculateTotalFee2(),
            selectedAddOns2: selectedAddOnsObject2, // ✅ Pass to next page
            addOnValue2: addOnValue2, // ✅ Pass 20 to the next page
          },
        });
      }

      if(response.data.phase == selectedPhase){
        toast.success(response.data.message);
      }else{
        toast.success(response.data.message1);
      }
    } catch (error) {
      console.error("API Error:", error);

      if (error.response) {
        console.error("Error Response Data:", error.response.data);
        const apiError = error.response.data?.error;

        if (selectedPhase === "Phase1") {
          navigate("/payment-detail", {
            state: {
              h5Name,
              selectedPhaseData2,
              selectedPhase,
              selectedMoney2,
              challengeFee: calculateTotalFee2(),
              selectedAddOns2: selectedAddOnsObject2, // ✅ Pass to next page
              addOnValue2: addOnValue2, // ✅ Pass 20
            },
          });
        }

        if (selectedPhase !== "Phase1") {
          toast.error(apiError);
        }
      } else {
        toast.error("Failed to fetch challenge status. Please try again.");
      }
    }
  };

  // const currentData2 = challengeTwoData[selectedMoney2]?.[selectedPhase2] || {};

  return (

    <div className="Challenges" id="challenges">
      <div className="background-images">
        <img src={LeftLineImg} alt="Left Line" className="bg-left-line" />
        <img src={LeftImg} alt="Football Position" className="bg-left-img" />
      </div>
      <div className="challenges-page">
        <div className="challange-top ">
          <h1 className="text-white ">
            {" "}
            <span className="line-right-box2 ">Choose Your Challenge</span>{" "}
          </h1>
        </div>

        {/* ------------------------------------- */}
        <div className="challange-btm">
          <div className="challenge-boxes">
            <div className="challenge_img"></div>
            <div className="challengeBox1">
              <div className="border-left-right"></div>
              <div className="C-box">
                <div className="full-challenge">
                  <h5>Normal</h5>
                  <span>
                    <img
                      alt="img-top"
                      src="https://fanfunded.io/wp-content/themes/fanfunded-wp-theme/img/low.svg"
                    />
                    2-Step Challenge
                  </span>
                </div>

                <div className="add-ons">
                  <h6 style={{ marginTop: "1vmax" }}>Product Add-Ons:</h6>
                  <div>
                    {" "}
                    {[
                      "Increase Max Drawdown by 5%",
                      "Profit Split 80/20",
                      "No Time Limit",
                      "Express Payout (Bi-Weekly)",
                    ].map((addOn, index) => (
                      <small
                        key={index}
                        onClick={() => toggleAddOn(addOn)}
                        style={{
                          cursor: "pointer",
                          padding: "5px",
                          border: selectedAddOns.includes(addOn)
                            ? "1px solid #DBB66B"
                            : "1px solid #DBB66B",
                          color: selectedAddOns.includes(addOn)
                            ? "#DBB66B"
                            : "#fff",
                          borderRadius: "20px",
                          marginRight: "5px",
                          display: "inline-block",
                          fontSize: "10px",
                        }}
                      >
                        {addOn}
                      </small>
                    ))}
                  </div>
                </div>

                <div className="account-size-2">
                  <div>
                    <h3>Account size:</h3>
                    <div className="select-dropdown-style">
                      <select
                        onChange={(e) => setSelectedMoney(e.target.value)}
                        value={selectedMoney}
                      >
                        {Object.keys(challengeFees1).map((amount) => (
                          <option key={amount} value={amount}>
                            ${parseInt(amount).toLocaleString()}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="challenge-fee">
                    <h3>Challenge fee:</h3>
                    {/* <h5> <span id="challenge-fee-title-blitz">8.99</span> </h5> */}
                    <span id="challenge-fee-title-blitz">
                      ${calculateTotalFee()}
                    </span>
                    <h6>One-time</h6>
                  </div>
                </div>

                <div className="tabs">
                  <ul className="tab-list-phase">
                    {["Phase1", "Phase2", "Funded"].map((phase) => (
                      <li
                        style={{ cursor: "pointer" }}
                        key={phase}
                        className={selectedPhase === phase ? "active" : ""}
                        onClick={() => setSelectedPhase(phase)}
                      >
                        <small style={{ cursor: "pointer" }}>
                          {" "}
                          {phase.replace("phase", "Phase ")}{" "}
                        </small>
                      </li>
                    ))}
                  </ul>

                  <div id="tabs-content">
                    <div id="tab1" className="tab-content">
                      <table>
                        <tbody>
                          <tr>
                            <td>Minimum Picks</td>
                            <td style={{ textAlign: "end" }}>
                              {selectedPhaseData.minPick}{" "}
                            </td>
                          </tr>
                          <tr>
                            <td>Minimum Pick Amount</td>
                            <td style={{ textAlign: "end" }}>
                            
                              ${selectedPhaseData.minAmount}{" "}
                            </td>
                          </tr>
                          <tr>
                            <td>Maximum Pick Amount</td>
                            <td style={{ textAlign: "end" }}>
                             
                              ${selectedPhaseData.maxAmount}
                            </td>
                          </tr>
                          <tr>
                            <td>Max Daily Loss</td>
                            <td style={{ textAlign: "end" }}>
                            
                              ${selectedPhaseData.maxDailyLoss}
                            </td>
                          </tr>
                          <tr>
                            <td>Max Loss</td>
                            <td style={{ textAlign: "end" }}>
                             
                              ${selectedPhaseData.maxLoss}
                            </td>
                          </tr>

                          <tr>
                            <td>Profit Target</td>
                            <td style={{ textAlign: "end" }}>
                              {selectedPhase === "Funded"
                                ? selectedPhaseData.profitTarget
                                : `$${selectedPhaseData.profitTarget}`}
                            </td>
                          </tr>

                          <tr>
                            <td>Time Limit</td>
                            <td style={{ textAlign: "end" }}>
                             
                              {selectedPhaseData.timeLimit}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <div className="active-btn">
                  <div
                    style={{ cursor: "pointer" }}
                    className="activate-Player"
                    id="start-plan-blitz"
                    onClick={handleActivate}
                  >
                    <span>Activate</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="challengeBox1">
              <div className="border-left-right"></div>
              <div className="C-box">
                <div className="full-challenge">
                  <h5>Aggressive</h5>
                  <span>
                    <img
                      alt="img-top"
                      src="https://fanfunded.io/wp-content/themes/fanfunded-wp-theme/img/low.svg"
                    />
                    Accelerated + High Rewards
                  </span>
                </div>

                <div className="add-ons">
                  <h6 style={{ marginTop: "1vmax" }}>Product Add-Ons:</h6>
                  <div>
                
                    {[
                      "Increase Max Drawdown by 5%",
                      "Profit Split 80/20",
                      "No Time Limit",
                      "Express Payout (Bi-Weekly)",
                    ].map((addOn, index) => (
                      <small
                        key={index}
                        onClick={() => toggleAddOn2(addOn)}
                        style={{
                          cursor: "pointer",
                          padding: "5px",
                          border: selectedAddOns2.includes(addOn)
                            ? "1px solid #DBB66B"
                            : "1px solid #DBB66B",
                          color: selectedAddOns2.includes(addOn)
                            ? "#DBB66B"
                            : "#fff",
                          borderRadius: "20px",
                          marginRight: "5px",
                          display: "inline-block",
                          fontSize: "10px",
                        }}
                      >
                        {addOn}
                      </small>
                    ))}
                  </div>
                </div>

                <div className="account-size-2">
                  <div>
                    <h3>Account size:</h3>
                    <div className="select-dropdown-style">
                      <select
                        onChange={(e) => setSelectedMoney2(e.target.value)}
                        value={selectedMoney2}
                      >
                        {Object.keys(challengeFees).map((amount) => (
                          <option key={amount} value={amount}>
                            ${parseInt(amount).toLocaleString()}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="challenge-fee">
                    <h3>Challenge fee:</h3>
                    {/* <h5> <span id="challenge-fee-title-blitz">8.99</span> </h5> */}
                    <span id="challenge-fee-title-blitz">
                      ${calculateTotalFee2()}
                    </span>
                    <h6>One-time</h6>
                  </div>
                </div>

                <div className="tabs">
                  <ul className="tab-list-phase">
                    {["Phase1", "Phase2", "Funded"].map((phase) => (
                      <li
                        key={phase}
                        className={selectedPhase2 === phase ? "active" : ""}
                        onClick={() => setSelectedPhase2(phase)} >
                        <small  style={{ cursor: "pointer" }} onClick={(e) => e.preventDefault()} > {phase.replace("phase", "Phase ")} </small>
                      </li>
                    ))}
                  </ul>

                  <div id="tabs-content">
                    <div id="tab1" className="tab-content">
                      <table>
                        <tbody>
                          <tr>
                            <td>Minimum Picks</td>
                            <td style={{ textAlign: "end" }}> {selectedPhaseData2.minPick || "N/A"} </td>
                          </tr>
                          <tr>
                            <td>Minimum Pick Amount</td>
                            <td style={{ textAlign: "end" }}> ${selectedPhaseData2.minAmount || "N/A"} </td>
                          </tr>
                          <tr>
                            <td>Maximum Pick Amount</td>
                            <td style={{ textAlign: "end" }}>  ${selectedPhaseData2.maxAmount || "N/A"} </td>
                          </tr>
                          <tr>
                            <td>Max Daily Loss</td>
                            <td style={{ textAlign: "end" }}>  ${selectedPhaseData2.maxDailyLoss || "N/A"} </td>
                          </tr>
                          <tr>
                            <td>Max Loss</td>
                            <td style={{ textAlign: "end" }}>  ${selectedPhaseData2.maxLoss || "N/A"} </td>
                          </tr>
                          <tr>
                            <td>Profit Target</td>
                            <td style={{ textAlign: "end" }}>  {selectedPhase2 === "Funded" ? selectedPhaseData2.profitTarget : `$${selectedPhaseData2.profitTarget}`} </td>
                          </tr>

                          <tr>
                            <td>Time Limit</td>
                            <td style={{ textAlign: "end" }}> {selectedPhaseData2.timeLimit || "N/A"} </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <div className="active-btn">
                  <div style={{ cursor: "pointer" }} className="activate-Player" id="start-plan-blitz" onClick={handleActivate2} >
                    <span>Activate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* -----------------responsive code-------------- */}
          <div className="challenge-slider">
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{ clickable: false }}
              modules={[Pagination]}
              style={{ width: "100%", height: "auto" }}
              breakpoints={{
                761: { slidesPerView: 1, // 761px par ek slide dikhega
                },
                1050: { slidesPerView: 1, // 1050px par bhi ek slide dikhega
                },
              }}
            >
              <SwiperSlide>
                <div className="challengeBox1">
                  <div className="border-left-right"></div>
                  <div className="C-box">
                    <div className="full-challenge">
                      <h5>Normal</h5>
                      <span>
                        <img alt="img-top" src="https://fanfunded.io/wp-content/themes/fanfunded-wp-theme/img/low.svg" />  2-step Challenge
                      </span>
                    </div>

                    <div className="add-ons">
                      <h6 style={{ marginTop: "1vmax" }}>Product Add-Ons:</h6>
                      <div>
                        {[ "Increase Max Drawdown by 5%",  "Profit Split 80/20", "No Time Limit", "Express Payout (Bi-Weekly)",
                        ].map((addOn, index) => (
                          <small key={index} onClick={() => toggleAddOn(addOn)}
                            style={{ cursor: "pointer", padding: "5px",
                              border: selectedAddOns.includes(addOn) ? "1px solid #DBB66B" : "1px solid #fff",
                              color: selectedAddOns.includes(addOn)  ? "#DBB66B"  : "#fff",  borderRadius: "20px", marginRight: "5px", display: "inline-block", }}
                          > {addOn} </small>
                        ))}
                      </div>
                    </div>

                    <div className="account-size-2">
                      <div>
                        <h3>Account size:</h3>
                        <div className="select-dropdown-style">
                          <select onChange={(e) => setSelectedMoney(e.target.value)} value={selectedMoney} >
                            {Object.keys(challengeFees1).map((amount) => (
                              <option key={amount} value={amount}> ${parseInt(amount).toLocaleString()} </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="challenge-fee">
                        <h3>Challenge fee:</h3>
                        {/* <h5> <span id="challenge-fee-title-blitz">8.99</span> </h5> */}
                        <span id="challenge-fee-title-blitz"> ${calculateTotalFee()} </span>
                        <h6>One-time</h6>
                      </div>
                    </div>

                    <div className="tabs">
                      <ul className="tab-list-phase">
                        {["Phase1", "Phase2", "Funded"].map((phase) => (
                          <li style={{ cursor: "pointer" }} key={phase} className={selectedPhase === phase ? "active" : ""} onClick={() => setSelectedPhase(phase)} >
                            <small style={{ cursor: "pointer" }}> {phase.replace("phase", "Phase ")} </small>
                          </li>
                        ))}
                      </ul>

                      <div id="tabs-content">
                        <div id="tab1" className="tab-content">
                          <table>
                            <tbody>
                              <tr>
                                <td>Minimum Picks</td>
                                <td style={{ textAlign: "end" }}> {selectedPhaseData.minPick} </td>
                              </tr>
                              <tr>
                                <td>Minimum Pick Amount</td>
                                <td style={{ textAlign: "end" }}>  ${selectedPhaseData.minAmount} </td>
                              </tr>
                              <tr>
                                <td>Maximum Pick Amount</td>
                                <td style={{ textAlign: "end" }}> ${selectedPhaseData.maxAmount} </td>
                              </tr>
                              <tr>
                                <td>Max Daily Loss</td>
                                <td style={{ textAlign: "end" }}> ${selectedPhaseData.maxDailyLoss} </td>
                              </tr>
                              <tr>
                                <td>Max Loss</td>
                                <td style={{ textAlign: "end" }}> ${selectedPhaseData.maxLoss} </td>
                              </tr>

                              <tr>
                                <td>Profit Target</td>
                                <td style={{ textAlign: "end" }}> {selectedPhase === "Funded" ? selectedPhaseData.profitTarget : `$${selectedPhaseData.profitTarget}`} </td>
                              </tr>

                              <tr>
                                <td>Time Limit</td>
                                <td style={{ textAlign: "end" }}> {selectedPhaseData.timeLimit} </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>

                    <div className="active-btn">
                      <div style={{ cursor: "pointer" }} className="activate-Player" id="start-plan-blitz" onClick={handleActivate} >
                        <span>Activate</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="challengeBox1">
                  <div className="border-left-right"></div>
                  <div className="C-box">
                    <div className="full-challenge">
                      <h5>Aggressive</h5>
                      <span>
                       <img alt="img-top" src="https://fanfunded.io/wp-content/themes/fanfunded-wp-theme/img/low.svg"/>
                        Accelerated + High Rewards
                      </span>
                    </div>

                    <div className="add-ons">
                      <h6 style={{ marginTop: "1vmax" }}>Product Add-Ons:</h6>
                      <div>
                      
                        {[ "Increase Max Drawdown by 5%", "Profit Split 80/20", "No Time Limit",  "Express Payout (Bi-Weekly)", ].map((addOn, index) => (
                          <small key={index} onClick={() => toggleAddOn(addOn)}
                            style={{ cursor: "pointer", padding: "5px", border: selectedAddOns2.includes(addOn) ? "1px solid #DBB66B" : "1px solid #fff", color: selectedAddOns2.includes(addOn) ? "#DBB66B" : "#fff",  borderRadius: "20px", marginRight: "5px", display: "inline-block", }} >
                            {addOn}
                          </small>
                        ))}
                      </div>
                    </div>

                    <div className="account-size-2">
                      <div>
                        <h3>Account size:</h3>
                        <div className="select-dropdown-style">
                          <select onChange={(e) => setSelectedMoney2(e.target.value)} value={selectedMoney2} >
                            {Object.keys(challengeFees).map((amount) => (
                              <option key={amount} value={amount}>
                                ${parseInt(amount).toLocaleString()}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="challenge-fee">
                        <h3>Challenge fee:</h3>
                        {/* <h5> <span id="challenge-fee-title-blitz">8.99</span> </h5> */}
                        <span id="challenge-fee-title-blitz"> ${calculateTotalFee2()} </span>
                        <h6>One-time</h6>
                      </div>
                    </div>

                    <div className="tabs">
                      <ul className="tab-list-phase">
                        {["Phase1", "Phase2", "Funded"].map((phase) => (
                          <li key={phase} className={selectedPhase2 === phase ? "active" : ""} onClick={() => setSelectedPhase2(phase)} >
                            <small style={{ cursor: "pointer" }} onClick={(e) => e.preventDefault()} > {phase.replace("phase", "Phase ")} </small>
                          </li>
                        ))}
                      </ul>

                      <div id="tabs-content">
                        <div id="tab1" className="tab-content">
                          <table>
                            <tbody>
                              <tr>
                                <td>Minimum Picks</td>
                                <td style={{ textAlign: "end" }}> {selectedPhaseData2.minPick || "N/A"} </td>
                              </tr>
                              <tr>
                                <td>Minimum Pick Amount</td>
                                <td style={{ textAlign: "end" }}> ${selectedPhaseData2.minAmount || "N/A"} </td>
                              </tr>
                              <tr>
                                <td>Maximum Pick Amount</td>
                                <td style={{ textAlign: "end" }}> ${selectedPhaseData2.maxAmount || "N/A"} </td>
                              </tr>
                              <tr>
                                <td>Max Daily Loss</td>
                                <td style={{ textAlign: "end" }}> ${selectedPhaseData2.maxDailyLoss ||  "N/A"} </td>
                              </tr>
                              <tr>
                                <td>Max Loss</td>
                                <td style={{ textAlign: "end" }}> ${selectedPhaseData2.maxLoss || "N/A"} </td>
                              </tr>
                              <tr>
                                <td>Profit Target</td>
                                <td style={{ textAlign: "end" }}> {selectedPhase2 === "Funded" ? selectedPhaseData2.profitTarget : `$${selectedPhaseData2.profitTarget}`} </td>
                              </tr>

                              <tr>
                                <td>Time Limit</td>
                                <td style={{ textAlign: "end" }}> {selectedPhaseData2.timeLimit || "N/A"} </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>

                    <div className="active-btn">
                      <div style={{ cursor: "pointer" }} className="activate-Player" id="start-plan-blitz" onClick={handleActivate2} > <span>Activate</span> </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          {/* -----------------responsive code-------------- */}
        </div>
      </div>
    </div>
  );
};

export default Challenges;
