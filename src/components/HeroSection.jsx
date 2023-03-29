import React from "react";
import search from "../icons/search.svg";
import { ReactComponent as TelegramIcon } from "../icons/telegram.svg";
import { ReactComponent as TwitterIcon } from "../icons/twitter.svg";
import { ReactComponent as DiscordIcon} from "../icons/discord.svg";
import hero from "../icons/hero.svg";



const HeroSection = () => {
    return(
        <div className="hero-section-container">
            <div className="hero-info-wrapper">
                <div className="hero-info-text">
                    <h1>
                        Bienvenue sur  <span className="highlighted">Emergency-Crypto</span> 
                    </h1>
                    <p className="hero-info-description">
                        il n'a jamais été facile de manipuler un wallet ! oui, nous savons par quoi vous passer et a quelle point vous en bavez ! mais tout est réglé avec E_Crypto vous pouvez tout apprendre et vous faire de l'argent a des moindre couts !
                    </p>
                    <div className="search-container">
            <div className="search-input-wrapper">
              <img className="search" src={search} alt="search" />
              <input
                className="search-input"
                placeholder="Search 5000+ ..."
              ></input>
            </div>
            <button className="search-btn primary">
              <span className="start-swapping"></span>
            </button>
          </div>
                    <div className="social-links-container">
            <div className="social-links">
              <a href="/">
                <TelegramIcon />
              </a>
              <a href="/">
                <TwitterIcon />
              </a>
              
              <a href="/">
                <DiscordIcon />
              </a>
            </div>
          </div>
                </div>
            </div>
            <div className="hero-image-container">
                <div>
                    <img className = "hero-img" src={hero} alt="blockchain" />
                </div>
            </div>
        </div>
    )
}
export default HeroSection;