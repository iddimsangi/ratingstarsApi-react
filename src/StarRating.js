import { useState } from "react";
import "./App.css";
import Star from "./Star";
const StarRating = ({ maxRatings }) => {
  const [rating, setRating] = useState(0);
  return (
    <div className="StarRating">
      {Array.from({ length: maxRatings }, (_, i) => (
        <Star
          onRate={() => setRating(i + 1)}
          key={i}
          color="red"
          Hsize={3}
          Wsize={3}
          full={rating >= i + 1}
        />
      ))}
      <p className="textstyle">{rating}</p>
    </div>
  );
};

export default StarRating;
