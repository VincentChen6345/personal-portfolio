import { Card } from "./Card";
import { cardContent } from "../data/cardContent";

export const AboutMeMain = () => {
  return (
    <section className="about-me-section" id="about-me-section">
      <div className="divider top"></div>
      <h1 className="section-heading">About Me</h1>
      <div className="card-section">
        {cardContent.map((item) => (
          <Card cardData={item} />
        ))}
      </div>
    </section>
  );
};
