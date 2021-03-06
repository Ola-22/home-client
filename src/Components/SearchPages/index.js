import "./style.css";
import { Link } from "react-router-dom";

export default function SearchPages({ onChange, imgSrc }) {
  return (
    <div className="search-pages">
      <Link to="/">
        <div className="home-back">
          <div className="background" />
          <img src={imgSrc} alt="" />{" "}
        </div>
      </Link>
      <div className="input-search">
        <input
          onChange={onChange}
          type="text"
          placeholder="Search for a service"
        />

        <img src="/images/Search.png" alt="" />
      </div>
    </div>
  );
}
