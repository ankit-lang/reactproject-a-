import "../style/Home.scss";
import vd from "../assets/2.webp";
import React from "react";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <div>
      <div className="home" id = "home">
        <main>
          <h1>CodeStar</h1>
          <p>Solution To All Your front-end Problem</p>
        </main>
      </div>
      <div className="home2">
        <img className="img1" src={vd} alt="graphic" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          aperiam repellat, debitis doloremque repudiandae earum rem assumenda
          perferendis! Unde qui, nulla consequatur iste facilis sed asperiores
          nam eum quibusdam, minus in iure! Quod tempora, vitae quia a atque
          fugiat delectus.
        </p>
      </div>
      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quos
            debitis inventore, sit esse suscipit delectus, incidunt repudiandae
            a magnam praesentium perferendis repellendus obcaecati assumenda
            voluptas nemo, accusantium, doloribus provident?
          </p>
        </div>
      </div>
      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>

          <article>
            <div style={{ animationDelay: "0.3s" }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div style={{ animationDelay: "0.5s" }}>
              <AiFillGoogleCircle />
              <p>Google</p>
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
    </div>
  );
};

export default Home;
