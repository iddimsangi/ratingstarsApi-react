import './App.css';
import Star from './Star';
const StarRating = ({maxRatings}) => {
  return (
    <div className="StarRating">
      <Star/>
      <p className="textstyle">0</p>
    </div>
  );
}

export default StarRating;
