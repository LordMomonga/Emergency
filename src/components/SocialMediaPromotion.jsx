import React from "react";
import { Card } from "./Card";
import discord from "../icons/discord2.svg";
import youtube from "../icons/youtube2.svg";
import paper from "../icons/paper.svg";


const SocialMediaPromotion = () => {
  return (
    <div className="social-media-promotion-container">
      <Card>
        <>
          <div className="social-media-promotion-text">
            <h2>
              <span className="higlighted">Rejoignez</span> notre communautée
            </h2>
          </div>
          <div className="social-media-promotion-icons">
            <a href="/">
              <img src={discord} alt="discord" />
            </a>
            <a href="/">
              <img src={youtube} alt="youtube" />
            </a>
            <a href="/">
              <img src={paper} alt="white paper" />
            </a>
            
          </div>
        </>
      </Card>
    </div>
  );
};

export default SocialMediaPromotion;
