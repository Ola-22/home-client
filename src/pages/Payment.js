import SearchPages from "../Components/SearchPages";
import Footer from "../Components/Footer";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardCvcElement,
  CardNumberElement,
  CardExpiryElement,
  Elements,
} from "@stripe/react-stripe-js";
import { Link } from "react-router-dom";

const promise = loadStripe(
  "pk_test_51IB0LMCyqqGmV68NMrqVLQ8ll4WzSXGAsEKDU74eUrCPexxwtfC2dSmyFlnsAZExeVpJeYTAMxvrahdROwMekaLp00lRScO2Uv"
);

export default function Payment() {
  return (
    <Elements stripe={promise}>
      <div>
        <SearchPages imgSrc="/images/Home.png" />
        <div className="services">
          <div className="mobile-box">
            <h6>Service request details:</h6>
            <div>
              <img width="11" height="17" src="/images/phone.png" alt="" />
              <input type="tel" placeholder="Mobile Number" />
            </div>
            <h6>Payment details:</h6>
            <div className="btn-payment">
              <button>Online Payment</button>
              <button>Cash</button>
            </div>
            <div className="payment-method">
              <button>
                <img src="/images/masterCard.png" alt="" />
              </button>
              <button>
                <img src="/images/Visa.png" alt="" />
              </button>
              <button>
                <img src="/images/payPal.png" alt="" />
              </button>
            </div>
            <h6>Card Number</h6>
            <div className="card-box">
              <div className="card-btn">
                <CardNumberElement />
              </div>
              <div className="expiration-box">
                <div>
                  <h6>Expiration</h6>
                  <div>
                    <CardExpiryElement className="card-btn" />
                  </div>
                </div>
                <div>
                  <h6>Security Code</h6>
                  <CardCvcElement className="card-btn" />
                </div>
              </div>
              <div>
                <h6>Postal / ZIP code</h6>
                <input
                  type="text"
                  placeholder="0000"
                  className="card-btn"
                  style={{ width: "149px" }}
                />
              </div>
              <button style={{ marginTop: "24px" }} className="requestBtn">
                Confirm Request
              </button>
            </div>
          </div>
        </div>

        <div style={{ position: "fixed", width: "375px", bottom: "0" }}>
          <Footer />
        </div>
      </div>
    </Elements>
  );
}
