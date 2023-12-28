import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";
import { subsInTotal } from "../store/paymentSlice";
import CheckoutForm from "../components/CheckoutForm";

function Checkout() {
  const dispatch = useDispatch();

  const disValue = (percent) => {
    return total  * percent / 100;
  };

  const total = useSelector((state) => state.payment.total);
  const navigate = useNavigate();

  const [promoCode, setPromoCode] = useState("");
  const [appliedCode, setAppliedCode] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setPromoCode(e.target.value);
  };

  const handleApplyPromoCode = () => {
    const codes = [
      "THANKYOU10",
      "UPGRADE20",
      "CELEBRATE30",
      "LUCKY40",
      "50OFFNOW",
      "SAVE25NOW",
    ];

    if (codes.includes(promoCode)) {
      setAppliedCode(promoCode);
      setError("");
      // TODO: Implement logic to apply the discount or perform any desired action
      switch (promoCode) {
        case "THANKYOU10":
          dispatch(subsInTotal(disValue(10)));
          break;
        case "UPGRADE20":
          dispatch(subsInTotal(disValue(20)));
          break;
        case "CELEBRATE30":
          dispatch(subsInTotal(disValue(30)));
          break;
        case "LUCKY40":
          dispatch(subsInTotal(disValue(40)));
          break;
        case "50OFFNOW":
          dispatch(subsInTotal(disValue(50)));
          break;
        case "SAVE25NOW":
          dispatch(subsInTotal(disValue(25)));
          break;
        default:
          break;
      }
    } else {
      setAppliedCode("");
      setError("Invalid promo code. Please try again.");
    }
  };

  return (
    <div className="flex flex-col-reverse sm:flex-row bg-gray-100 p-5 sm:space-x-3">
      <CheckoutForm />

      <div className="sm:w-4/12 mx-auto h-fit mt-12 sm:my-8 p-6 bg-white rounded-md shadow-md">
        <div
          onClick={() => navigate("/offer")}
          className="w-full cursor-pointer my-3 border text-xl justify-evenly item-center text-gray-500 flex px-1 py-1"
        >
          <Icon icon="tabler:discount-2" width="40" />
          <span className="p-1">Check Coupons</span>
          <Icon icon="mingcute:right-fill" width="40" />
        </div>
        <label
          htmlFor="promoCode"
          className="block text-mg font-bold text-gray-700"
        >
          Promotion Code?
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <input
            type="text"
            placeholder="Enter coupon code"
            id="promoCode"
            className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            value={promoCode}
            onChange={handleInputChange}
          />
        </div>
        <button
          onClick={handleApplyPromoCode}
          className="mt-4 font-bold inline-flex items-center px-4 py-2 border border-transparent text-sm rounded-md text-white gradient opacity-90 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Apply
        </button>

        {appliedCode && (
          <p className="mt-2 text-green-600">
            Applied promo code: <span className="font-bold">{appliedCode}</span>
          </p>
        )}
        {error && <p className="mt-2 text-red-600">{error}</p>}

        <div className="border mt-5 mb-2 w-full"></div>

        <div className="w-full text-2xl font-bold flex justify-between text-gray-700">
          <span>Payable Amount</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
