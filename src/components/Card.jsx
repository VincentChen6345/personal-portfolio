import "./Card.css";
export const Card = ({ cardData }) => {
  const num = cardData.number + 1;

  return (
    <div className={`card-container num${num}`}>
      <h2 className="card-heading">{cardData.title}</h2>
      <img
        id={`image${num}`}
        src={cardData.icon}
        alt={cardData.alt}
        className="card-icon"
      />
      <div className="description hidden">{cardData.textBlock}</div>
    </div>
  );
};
