import React from "react";
import "./Main.css";
import { assets } from "../../assets/assets/assets";

function Main() {
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        <div className="greet">
          <p>
            Hi, <span>Abhishek</span>
          </p>
          <p>What's up?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Suggest a beautiful places to see on upcoming road trip </p>
            <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card">
            <p>Briefly summerize this concept: urban planning </p>
            <img src={assets.bulb_icon} alt="" />
          </div>
          <div className="card">
            <p>Brainstrome team bonding activities for our work retreat</p>
            <img src={assets.message_icon} alt="" />
          </div>
          <div className="card">
            <p>Improve the readbility of the following code </p>
            <img src={assets.code_icon} alt="" />
          </div>
        </div>

        <div className="main-bottom">
          <div className="search-box">
            <input type="text" placeholder="Enter a prompt here" />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img src={assets.send_icon} alt="" />
            </div>
          </div>
          <p className="bottom-info">
            Gemini is working on an api of google gemini its not working properly as of now. it just a projct for now.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
