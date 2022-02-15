import SearchPages from "../Components/SearchPages";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";

export default function Request() {
  return (
    <div className="request">
      <SearchPages imgSrc="/images/Home.png" />
      <div className="services">
        <div className="mobile-box">
          <h6>Service request details:</h6>

          <div>
            <img width="11" height="17" src="/images/phone.png" alt="" />
            <input type="tel" placeholder="Mobile Number" />
          </div>

          <Link to="/payment">
            <button className="requestBtn btn">Request</button>
          </Link>
        </div>
      </div>
      <div style={{ position: "fixed", width: "375px", bottom: "0" }}>
        <Footer />
      </div>
    </div>
  );
}
