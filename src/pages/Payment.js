import SearchPages from "../Components/SearchPages";
import Footer from "../Components/Footer";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { CardCvcElement } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51IB0LMCyqqGmV68NMrqVLQ8ll4WzSXGAsEKDU74eUrCPexxwtfC2dSmyFlnsAZExeVpJeYTAMxvrahdROwMekaLp00lRScO2Uv"
);

export default function Payment() {
  return (
    <Elements stripe={promise}>
      <div>
        <SearchPages imgSrc="/images/Home.png" />
        <CardCvcElement />

        <div style={{ position: "fixed", width: "375px", bottom: "0" }}>
          <Footer />
        </div>
      </div>
    </Elements>
  );
}
