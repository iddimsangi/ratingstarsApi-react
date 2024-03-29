import sprite from "./sprite.svg";
const Star = ({ color = "green", Hsize = 2, Wsize = 2, onRate, fullStarDisplay, onMouseHovering, onMouseLeaving }) => {
  const starStyles = {
    fill: color,
    height: `${Hsize}rem`,
    width: `${Wsize}rem`,
    cursor: "pointer",
    marginRight: "6px",
  };
  return (
    <>
      {fullStarDisplay ? (
        <svg onClick={onRate} onMouseEnter={onMouseHovering} onMouseLeave={onMouseLeaving} className="icon icon-star-full" style={starStyles}>
          <use xlinkHref={`${sprite}#icon-star-full`}></use>
        </svg>
      ):(
        <svg onClick={onRate} onMouseEnter={onMouseHovering}  className="icon icon-star-empty" style={starStyles}>
          <use xlinkHref={`${sprite}#icon-star-empty`}></use>
        </svg>
      )}
    </>
  );
};

export default Star;
