import sprite from "./sprite.svg";
const Star = ({ color = "green", Hsize = 2, Wsize = 2, onRate, full }) => {
  const starStyles = {
    fill: color,
    height: `${Hsize}rem`,
    width: `${Wsize}rem`,
    cursor: "pointer",
    marginRight: "6px",
  };
  return (
    <>
      {full ? (
        <svg onClick={onRate} class="icon icon-star-full" style={starStyles}>
          <use xlinkHref={`${sprite}#icon-star-full`}></use>
        </svg>
      ):(
        <svg onClick={onRate} class="icon icon-star-empty" style={starStyles}>
          <use xlinkHref={`${sprite}#icon-star-empty`}></use>
        </svg>
      )}
    </>
  );
};

export default Star;
