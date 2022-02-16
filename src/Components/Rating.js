import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export default function Rating({ rating, onClick }) {
  return (
    <>
      {[...Array(5)].map((_, i) => (
        <span className="rating" key={i} onClick={() => onClick(i)}>
          {rating > i ? (
            <AiFillStar fontSize="15px" />
          ) : (
            <AiOutlineStar fontSize="15px" />
          )}
        </span>
      ))}
    </>
  );
}
