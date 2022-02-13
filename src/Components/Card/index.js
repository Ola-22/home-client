import "./style.css";
import Rating from "../Rating";

export default function Card({
  imgService,
  title,
  rating,
  address,
  imgLocation,
  ratings,
  paragraph,
  rateImg,
  rateVal,
  review,
  price,
}) {
  return (
    <>
      <div className="card">
        <img src={imgService} alt="" />
        <div>
          <h2>{title}</h2>
          <div>{ratings && <Rating rating={rating} />}</div>

          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={imgLocation} alt="" />
            <h6>{address}</h6>
          </div>
        </div>
        <div className="rateVal">
          <img src={rateImg} alt="" />
          <span>{rateVal}</span>
          <span>{review}</span>
        </div>
        <div>
          <h4>{price}</h4>
        </div>
      </div>
      <p className="paragraph">{paragraph}</p>
    </>
  );
}
