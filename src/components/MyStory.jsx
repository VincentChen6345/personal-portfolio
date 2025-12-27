import "./MyStory.css";
import portrait2 from "../img/portrait-2.jpg";

export const MyStory = () => {
  return (
    <article className="my-story-section">
      <h1 className="section-heading">My Story</h1>
      <img src={portrait2} alt="portrait" className="story-portrait" />
      <div>
        <p>
          <em className="quote">
            "You've got to find what you love. Your work is going to fill a
            large part of your life, and the only way to be truly satisfied is
            to do what you believe is great work. And the only way to do great
            work is to love what you do."
          </em>
          - Steve Jobs, 2005.
        </p>
        <br />
        <p>
          Like many young adults in their early to mid 20s, I questioned if I
          was on the right path. During university I struggled to find what I
          loved to do. I studied civil engineering at the University of New
          South Wales and although it is a stable and rewarding career path, I
          knew deep down that the world of construction didn't excite me.
        </p>
        <br />
        <p>
          What really excited me was the world of tech. You can make your own
          website with React, design a game with Python, the possibilities with
          software are endless.
        </p>
        <br></br>
        <p>
          This year I took the leap and left my civil engineering career of 3.5
          years to pursue a Master of IT at UNSW.
        </p>
        <br />
        <p>
          I know now that my passion lies in building the digital world and I’m
          excited to keep learning, creating, and contributing to meaningful
          projects.
        </p>
      </div>
    </article>
  );
};
