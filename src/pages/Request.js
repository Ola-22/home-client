import SearchPages from "../Components/SearchPages";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";

export default function Request() {
  return (
    <div className="request">
      <SearchPages imgSrc="/images/Home.png" />
      <div className="services">
        <div>
          <h6>Service request details:</h6>

          <img width="11" height="17" src="/images/phone.png" alt="" />
          <input type="tel" placeholder="Mobile Number" />

          <Link to="/payment">
            <button className="requestBtn">Request</button>
          </Link>
        </div>
      </div>
      <div style={{ position: "fixed", width: "375px", bottom: "0" }}>
        <Footer />
      </div>
    </div>
  );
}
