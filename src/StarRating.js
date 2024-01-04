import { useState } from "react";
import "./App.css";
import Star from "./Star";
const StarRating = ({ maxRatings }) => {
  const [rating, setRating] = useState(0);
  const[mouseRating, setMouseRating] = useState(0);
  return (
    <div className="StarRating">
      {Array.from({ length: maxRatings }, (_, i) => (
        <Star
          onRate={() => setRating(i + 1)}
          key={i}
          color="red"
          Hsize={3}
          Wsize={3}
          fullStarDisplay={mouseRating ? mouseRating >= i + 1 : rating >= i + 1}
          onMouseHovering={() => setMouseRating(i + 1)}
          onMouseLeaving={() => setMouseRating(0)}
        />
      ))}
      <p className="textstyle">{mouseRating||rating || ""}</p>
    </div>
  );
};

export default StarRating;
