import SearchPages from "../Components/SearchPages";
import Footer from "../Components/Footer";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { CardCvcElement } from "@stripe/react-stripe-js";
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
            {/* <CardCvcElement /> */}
          </div>
        </div>

        <div style={{ position: "fixed", width: "375px", bottom: "0" }}>
          <Footer />
        </div>
      </div>
    </Elements>
  );
}
