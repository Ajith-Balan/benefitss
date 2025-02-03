import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Refrals = () => {
  const navigate = useNavigate();
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    const checkSubscription = async () => {
      const userId = localStorage.getItem("userId");
      if (!userId) {
        navigate("/login");
        return;
      }
      try {
        const { data } = await axios.get(
          `http://localhost:3003/api/check-subscription/${userId}`
        );
        setIsSubscribed(data.subscribed);
      } catch (error) {
        console.error("Error checking subscription:", error);
      }
    };
    checkSubscription();
  }, [navigate]);

  const loadRazorpay = async () => {
    try {
      const userId = localStorage.getItem("userId");
      if (!userId) {
        alert("⚠️ User not logged in! Please log in first.");
        navigate("/login");
        return;
      }
      const { data } = await axios.post("http://localhost:3003/api/createorder");
      const options = {
        key: "rzp_test_kZ85G3MYrmQk4J",
        amount: data.amount,
        currency: data.currency,
        name: "Premium Subscription",
        description: "Get exclusive benefits for ₹100/month",
        order_id: data.id,
        handler: async function (response) {
          try {
            const res = await axios.post("http://localhost:3003/api/verify", {
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_signature: response.razorpay_signature,
              userId: userId,
            });
            if (res.data.success) {
              alert("🎉 Payment Successful! Welcome to Premium.");
              setIsSubscribed(true);
            } else {
              alert("❌ Payment Failed! Please try again.");
            }
          } catch (error) {
            alert("⚠️ Payment Verification Failed!");
          }
        },
        theme: { color: "#4CAF50" },
        modal: {
          ondismiss: function () {
            alert("🛑 Payment was cancelled!");
          },
        },
      };
      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.error("Error loading Razorpay:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-full text-center">
        {isSubscribed ? (
          <>
            <h2 className="text-3xl font-bold text-green-600 mb-4">🎉 Welcome to Premium!</h2>
            <p className="text-gray-700 text-lg mb-6">You now have access to all premium benefits.</p>
            <table className="w-full text-left border-collapse border border-gray-300 mb-6">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-2 border">Feature</th>
                  <th className="p-2 border">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border">Access to Premium Content</td>
                  <td className="p-2 border">✅</td>
                </tr>
                <tr>
                  <td className="p-2 border">Ad-Free Experience</td>
                  <td className="p-2 border">✅</td>
                </tr>
                <tr>
                  <td className="p-2 border">Exclusive Discounts</td>
                  <td className="p-2 border">✅</td>
                </tr>
                <tr>
                  <td className="p-2 border">Priority Customer Support</td>
                  <td className="p-2 border">✅</td>
                </tr>
              </tbody>
            </table>
            <button
              onClick={() => navigate("/")}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            >
              Go to Premium Content
            </button>
          </>
        ) : (
          <>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Premium Plan</h2>
            <p className="text-gray-600 text-lg mb-6">Subscribe for just ₹100/month to unlock exclusive benefits.</p>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
           <table className="w-full text-left border-collapse border border-gray-300 mb-6">
            {/* <h1 className="text-center font-bold p-6">Normal</h1> */}
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-2 border">Feature</th>
                  <th className="p-2 border">Included</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border">Access to Premium Content</td>
                  <td className="p-2 border">❌</td>
                </tr>
                <tr>
                  <td className="p-2 border">Ad-Free Experience</td>
                  <td className="p-2 border">❌</td>
                </tr>
                <tr>
                  <td className="p-2 border">Exclusive Discounts</td>
                  <td className="p-2 border">❌</td>
                </tr>
                <tr>
                  <td className="p-2 border">Priority Customer Support</td>
                  <td className="p-2 border">❌</td>
                </tr>
              </tbody>
            </table>
            <table className="w-full text-left border-collapse border border-gray-300 mb-6">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-2 border">Feature</th>
                  <th className="p-2 border">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border">Access to Premium Content</td>
                  <td className="p-2 border">✅</td>
                </tr>
                <tr>
                  <td className="p-2 border">Ad-Free Experience</td>
                  <td className="p-2 border">✅</td>
                </tr>
                <tr>
                  <td className="p-2 border">Exclusive Discounts</td>
                  <td className="p-2 border">✅</td>
                </tr>
                <tr>
                  <td className="p-2 border">Priority Customer Support</td>
                  <td className="p-2 border">✅</td>
                </tr>
              </tbody>
            </table>
           </div>
            <button
              onClick={loadRazorpay}
              className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-600 transition duration-300"
            >
              Subscribe Now for ₹100
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Refrals;