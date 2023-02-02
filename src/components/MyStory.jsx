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
        </p>{" "}
        <br />
        <p>
          Like many young adults in their early to mid 20s, I questioned if I
          was on the right path.During university I struggled to find a career
          that I felt satisfied in, I struggled to find what I love to do. I
          studied civil engineering at the University of New South Wales which
          is focused on the construction of buildings,structures and major
          infrastructure. Although it is a stable and rewarding career path, I
          knew deep down that the world of construction didn't suit me, it
          didn't excite me.
        </p>
        <br />
        <p>
          I graduated at the end of 2019 right before the pandemic hit, still
          searching for a graduate job. A global pandemic, months of lockdowns
          and an economic recession- the future wasn't exactly looking too
          bright. Not only couldn't I find a job I loved, I also couldn't find
          love. I was quite dissatisfied with my dating life at this time.
        </p>
        <br />
        <p>
          Dating apps just didnt seem to work in my favor. Perhaps I wasn't good
          enough or perhaps, the current dating apps aren't good enough. So I
          pitched my idea to my best friend, "Current dating apps are too
          superficial, let's make a dating app where your profile is just one 30
          second video". He was onboard. There was one problem , neither of us
          knew how to code an app. No problem, we'll learn how to code it
          ourselves.
        </p>
        <br />
        <p>
          That's how it all began, I completed a free online tutorial for
          Python. It was a lot of fun. It felt like a puzzle, like a game. After
          realising that Python isn't enough to build an app , I eventually
          discovered the world of front-end development and that's when things
          just clicked. You're telling me I can use the power of code to build
          websites that can be accessed by billions of people around the world?
          I can just think of an idea and create an app for it with my own two
          hands? I knew I had found it; I had found what I loved to do. I didn't
          want to build the physical world, I want to build the digital world.
        </p>
        <br />
        p.s. We gave up on the dating app <br />
        p.p.s. I have a coding Youtube channel where I document my journey of
        becoming a front end developer!
      </div>
    </article>
  );
};
