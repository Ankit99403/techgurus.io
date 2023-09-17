import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
function Home() {
  return (
    <>
      <div className="home" id="home">
        <main>
          {/* <h1>WebDeveloper</h1> */}
          <p>
            {" "}
            Your One-Stop Solution for All Your Problems in the Digital World
          </p>
        </main>
      </div>
      <div className="home2">
        <img src={vg} alt="graphics" />
        <div>
          <p>
            TechGurus.io is a customer-centric website offering specialized web
            development services and excellent customer support. Our mission is
            to understand customer needs and assist in achieving web development
            goals. We provide a traditional web development experience,
            prioritizing both prosperity and responsiveness, enabling efficient
            achievement of web development objectives with satisfaction.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            modi quaerat ratione qui odio illum ipsum possimus perspiciatis
            saepe illo. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Nihil repudiandae reiciendis, neque obcaecati minima facilis
            corrupti unde veritatis mollitia sequi.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{ animationDelay: "0.3s" }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div style={{ animationDelay: "0.5s" }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div style={{ animationDelay: "0.7s" }}>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
            <div style={{ animationDelay: "1s" }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}

export default Home;
