import Navbar from "../../pages/Navbar/Navbar"; 
import "./PaymentDetail.css";
import { FaInfoCircle } from "react-icons/fa"; // Info icon ke liye
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
 
const PaymentDetail = () => {
  const navigate = useNavigate();
  const userId = useSelector((state) => state.user.userId);
  const location = useLocation();
  const selectedChallengeData = location.state?.selectedPhaseData || location.state?.selectedPhaseData2;
  const { selectedPhaseData, selectedPhaseData2, selectedMoney, selectedMoney2, challengeFee , selectedPhase, selectedAddOns,   selectedAddOns2, h5Name} = location.state || {};

  console.log("h5Name",h5Name)

   // console.log("Final Selected Phase Data:", selectedChallengeData);
  // console.log("Selected Phase Data:", selectedPhaseData);
  // console.log("Selected Phase Data 2:", selectedPhaseData2);
  // console.log("Account Size:", selectedMoney2);
  //  console.log("Challenge Fee:", challengeFee);
  // console.log("selected Phase :", selectedPhase);
  // console.log("selected addOnValue :", addOnValue);
  // console.log("selected selectedAddOns :", selectedAddOns);
  // console.log("selected addOnValue2 :", addOnValue2);
  // console.log("selected selectedAddOns2 :", selectedAddOns2);

  const minPick = selectedChallengeData?.minPick ? parseInt(selectedChallengeData.minPick.split(" ")[0]) : 1;
  const minAmount = selectedChallengeData?.minAmount ? parseFloat(selectedChallengeData.minAmount) : 1;
  const maxAmount = selectedChallengeData?.maxAmount ? parseFloat(selectedChallengeData.maxAmount) : 5;
  const maxLoss = selectedChallengeData?.maxLoss ? parseFloat(selectedChallengeData.maxLoss) : 10;
  const maxDailyLoss = selectedChallengeData?.maxDailyLoss ? parseFloat(selectedChallengeData.maxDailyLoss) : 15;
  const profitTarget = selectedChallengeData?.profitTarget ? parseFloat(selectedChallengeData.profitTarget) : 20;
  const timeLimit = selectedChallengeData?.timeLimit ? parseInt(selectedChallengeData.timeLimit) : 30;
  const phase_name = selectedPhase ;
  const max_loss_add_on = selectedAddOns?.max_loss_add_on || selectedAddOns2?.max_loss_add_on || false;
  const profit_split_add_on = selectedAddOns?.profit_split_add_on || selectedAddOns2?.profit_split_add_on || false;
  const no_time_limit = selectedAddOns?.no_time_limit || selectedAddOns2?.no_time_limit || false;
  const express_payout = selectedAddOns?.express_payout || selectedAddOns2?.express_payout || false;
  

  const [formData, setFormData] = useState({
    user_id: userId,
    first_name: "",
    last_name: "",
    country: "",
    state: "",
    house_no_and_street_name: "",
    city: "",
    postcode: "",
    phone_no: "",
    email: ""
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false); // Track form submission
  const [orderID, setOrderID] = useState("");
  const [billingId, setBillingId] = useState(null);

  // console.log('bill id',billingId )
  
  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});
    setMessage("");
  
    try {
      const response = await fetch("https://fundedwagers.io/migrate/admin/api/billing-details", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
  
      if (data.status === 422) {
        setErrors(data.error);
      } else if (data.result === true) {
        setMessage("Billing details submitted successfully!");
        setBillingId(data.billing_detail.id); // ✅ Billing ID store karein
        setIsFormSubmitted(true);
      } else {
        setMessage("An error occurred. Please try again.");
      }
    } catch (error) {
      setMessage("Network error. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };
  
const [paymentId, setPaymentId] = useState(null);

useEffect(() => {
  // console.log("useEffect triggered 🚀", window.location.search);
  
  const verifyPaymentDetails = async () => {
    // console.log("Verifying Payment Details...");
    const urlParams = new URLSearchParams(window.location.search);
    const paymentId = urlParams.get("paymentId");
    const payerId = urlParams.get("PayerID");

    // console.log("Extracted Payment ID:", paymentId);
    // console.log("Extracted Payer ID:", payerId);

    if (paymentId && payerId) {
      const response = await verifyPayment(paymentId, payerId);
      // console.log("Payment Verification Response:", response);
    }
  };

  setTimeout(verifyPaymentDetails, 1000); // Small delay to ensure search params update
}, [window.location.search]); // Force re-run with window.location.search

const createOrder = async () => {
  if (!billingId) {
    console.error("Billing ID missing! Please submit the form first.");
    toast.error("Please complete billing details before proceeding to payment.");
    return Promise.reject("Billing ID missing");
  }

  // console.log("Creating Order with Billing ID:", billingId);
  // Function to format selectedMoney (e.g., 1000 -> 1k, 2500 -> 2.5k, etc.)
  const formatMoney = (amount) => {
    if (amount >= 1000) {
      return (amount / 1000) + "k";
    }
    return amount.toString();
  };

  // Format selectedMoney before using it in phaseName
 // Format the account size value (use selectedMoney if available, otherwise selectedMoney2)
const formattedMoney = formatMoney(selectedMoney ?? selectedMoney2);
const account_size = selectedMoney ?? selectedMoney2;
// Construct phaseName with formattedMoney
const phaseName = `${formattedMoney} ${h5Name ? h5Name + " " : ""}${selectedPhase}`;

// Format account size values


  try {
    setLoading(true);
    const response = await fetch("https://fundedwagers.io/migrate/admin/api/paypal", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: userId,
        account_size: account_size,
        phase: phaseName,
        minimum_picks: minPick,
        minimum_picks_amount: minAmount,
        maximum_picks_amount: maxAmount,
        maximum_loss: maxLoss,
        maximum_daily_loss: maxDailyLoss,
        profit_target: profitTarget,
        time_limit: timeLimit,
        amount: challengeFee,
        billing_id: billingId,
        max_loss_add_on,
        profit_split_add_on,
        no_time_limit,
        express_payout,
        phase_name,
         
      }),
    });

    const data = await response.json();
    // console.log("API Response:", data);

    if (data.success && data.payment_id && data.redirect_url) {
      
      
      setPaymentId(data.payment_id);
      // console.log("Payment ID Set:", data.payment_id);

      // Save Payment ID locally
      sessionStorage.setItem("paymentId", data.payment_id);

      window.location.href = data.redirect_url;
      
    } else {
      console.error("Error: Redirect URL or Payment ID missing", data);
      return Promise.reject("Redirect URL or Payment ID missing");
    }
  } catch (error) {
    console.error("API Error:", error);
    return Promise.reject(error);
  } finally {
    setLoading(false);
  }
};

  return (
    <>
      <Navbar />
      <div className="PaymentDetail-main">
        <div className="Payment-content">
          <div className="payment-btm">
           
       <div className="payment-left">
      <form onSubmit={handleSubmit}>
        <h5>Billing details</h5>

        <div className="payment-ipt">
          <input type="text" name="first_name" placeholder="First Name" value={formData.first_name} onChange={handleChange} />
        </div>
        {errors.first_name && <span className="error">{errors.first_name[0]}</span>}

        <div className="payment-ipt">
          <input type="text" name="last_name" placeholder="Last Name" value={formData.last_name} onChange={handleChange} />
        </div>
        {errors.last_name && <span className="error">{errors.last_name[0]}</span>}

        <div className="payment-ipt">
          <input type="text" name="country" placeholder="Country" value={formData.country} onChange={handleChange} />
        </div>
        {errors.country && <span className="error">{errors.country[0]}</span>}

        <div className="payment-ipt">
          <input type="text" name="state" placeholder="State" value={formData.state} onChange={handleChange} />
        </div>
        {errors.state && <span className="error">{errors.state[0]}</span>}

        <div className="payment-ipt">
          <input type="text" name="city" placeholder="Town/City" value={formData.city} onChange={handleChange} />
        </div>
        {errors.city && <span className="error">{errors.city[0]}</span>}

        <div className="payment-ipt">
          <input type="text" name="house_no_and_street_name" placeholder="House Number & Street Name" value={formData.house_no_and_street_name} onChange={handleChange} />
        </div>
        {errors.house_no_and_street_name && <span className="error">{errors.house_no_and_street_name[0]}</span>}

        <div className="payment-ipt">
          <input type="text" name="postcode" placeholder="Postcode/Zip" value={formData.postcode} onChange={handleChange} />
        </div>
        {errors.postcode && <span className="error">{errors.postcode[0]}</span>}

        <div className="payment-ipt">
          <input type="text" name="phone_no" placeholder="Phone" value={formData.phone_no} onChange={handleChange} />
        </div>
        {errors.phone_no && <span className="error">{errors.phone_no[0]}</span>}

        <div className="payment-ipt">
          <input type="text" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} />
        </div>
        {errors.email && <span className="error">{errors.email[0]}</span>}

        {message && <p className="message">{message}</p>}
      </form>
    </div>
            <div className="payment-right">
            <div className="payment-one">
              <h5>Your Evaluation</h5>
              <div className="price">
                <h6>Product</h6>
                <h6>Subtotal</h6>
              </div>
              <div className="price">
                <h6>{selectedMoney ?? selectedMoney2}{h5Name} - {selectedPhase}  × 1</h6>
                <h6>{challengeFee}</h6> {/* Dynamic Challenge Fee */}
              </div>
              <div className="price">
                <h6>Subtotal</h6>
                <h6>{challengeFee}</h6> {/* Dynamic Challenge Fee */}
              </div>
              <div className="price">
                <h6>Total</h6>
                <h6>{challengeFee}</h6> {/* Dynamic Challenge Fee */}
              </div>
            </div>
            {/* <button type="submit" disabled={loading}>{loading ? "Submitting..." : "Submit"}</button> */}
            {isFormSubmitted ? (
  <PayPalScriptProvider options={{ "client-id": "AVBMenNjacZQqWa_7Sb_esX3vAb-Yd1QsLuCBHZITS3e0sTBzLemQcMoorCdRnxXkQJX6Hcc4Tck42FH", currency: "USD" }}>
  <PayPalButtons
  createOrder={createOrder}  // ✅ No redirect, just create order
     // ✅ Captures payment & shows toast

/>
  </PayPalScriptProvider>
) : (
  <button
    style={{
      padding: "10px 20px",
      background: "linear-gradient(45deg, #DBB66B, #F90 )",
      border: "none",
      color: "#fff",
      fontWeight: "bold",
      cursor: "pointer",
      borderRadius: "5px",
    }}
    type="button" // Change to "button" to prevent unintended form submission
    disabled={loading}
    onClick={handleSubmit} // Call handleSubmit first before showing PayPal
    className="join-btn btn-join relative"
  >
    <span className="text-center font-bold text-gradient">{loading ? "Submit" : "Submit"}</span>
  </button>
)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentDetail;