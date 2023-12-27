import React from "react";
import MainLayout from "../Layout/MainLayout";
import transfer from "/Images/transfer-fund.svg";
import buyToken from "/Images/buy-sell.svg";
import twitter from "/Images/twitter-x.svg";
import discord from "/Images/discord.svg";
import youtube from "/Images/youtube.svg";
import instagram from "/Images/instagram.svg";
import Accordion from "../components/FAQs/Accordion";
import { FAQsData } from "../data";

const HomePage = () => {
  return (
    <MainLayout>
      <section>
        <div className="hero-section container">
          <div className="hero-content">
            <h2>
              Explore and invest in the
              <span className="gradient-text">
                {" "}
                most promising blockchain projects{" "}
              </span>
              and say
              <span className="gradient-text"> goodbye to gas fees </span>{" "}
              slowing you down
            </h2>
            <p>
              Pride is an all in one package that allow you to create tokens,
              invest in web3 projects and allows for gasless swap of tokens
              without any hassle!
            </p>
            <div className="btn-content">
              <button type="button" className="btn">
                Explore Launchpads
              </button>
              <button type="button" className="btn-hipster">
                Swap tokens
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="feature-section">
        <div className="feature-content">
          <p>We are powered by</p>
          <div className="feature">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="feature-box container">
          <div className="feature-text-box">
            <h1>
              Your ticket to{" "}
              <span className="gradient-text">explore and invest</span>
            </h1>
            <p>
              From NFT ecosystems to DeFi platforms, we've got you covered. The
              future of finance and innovation awaits!
            </p>
            <div className="feature-stats">
              <div>
                <p>Total Projects launched</p>
                <h2 className="gradient-text">38+</h2>
              </div>
              <div>
                <p>Total Projects launchpad</p>
                <h2 className="gradient-text">1k+</h2>
              </div>
            </div>
            <div className="btn-content">
              <button className="btn"> Explore launchpads ➡</button>
              <button className="btn-hipster"> Create launchpad</button>
            </div>
          </div>
          <img src={transfer} alt="transfer fund image" />
        </div>
      </section>
      <section>
        <h1 className="trade-text container">
          Trade your favorite tokens effortlessly and {""}
          <span className="gradient-text">without the fees</span> that hold you
          back
        </h1>
      </section>
      <section className="swap-section">
        <div className="swap-box container">
          <div className="swap-content">
            <p>
              Seamless Gasless Swap with Pride. Tired of high gas fees slowing
              you down? Say goodbye to those hassles with our gasless swap
              feature.{" "}
            </p>
            <div className="btn-content">
              <button className="btn">Swap tokens ➡</button>
              <button className="btn-hipster">Create tokens</button>
            </div>
          </div>
          <img src={buyToken} alt="Buying token image" />
        </div>

        <div className="FAQs container">
          <h1>
            Frequently Asked <span className="gradient-text">Questions</span>
          </h1>

          {FAQsData.map((FAQ, index) => {
            return <Accordion {...FAQ} key={index} />;
          })}
        </div>
      </section>
      <section className="support-section">
        <div className="support-box container">
          <div className="support-content">
            <h5>Stay updated with our latest product releases</h5>
            <div className="support-social">
              <p>Follow our social media accounts</p>
              <div className="social">
                <a href="#">
                  <img src={twitter} alt="twitter" />
                </a>
                <a href="#">
                  <img src={discord} alt="discord" />
                </a>
                <a href="#">
                  <img src={youtube} alt="youtube" />
                </a>
                <a href="#">
                  <img src={instagram} alt="instagram" />
                </a>
              </div>
            </div>
          </div>
          <div className="support-social-left">
            <p>
              Have questions or need assistance? Our friendly support team is
              here to help.
            </p>
            <button className="btn-hipster">Contact us ↗</button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              w="2"
              height="168"
              viewBox="0 0 2 168"
              fill="none"
            >
              <path
                d="M1 1L0.999993 167"
                stroke="url(#paint0_linear_44_858)"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_44_858"
                  x1="1"
                  y1="1"
                  x2="-15.9533"
                  y2="2.61235"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FFADD4" />
                  <stop
                    offset="0.549723"
                    stopColor="#8BD4FF"
                    stopOpacity="0.744141"
                  />
                  <stop
                    offset="0.549823"
                    stopColor="#ADE2FF"
                    stopOpacity="0.74"
                  />
                  <stop offset="1" stopColor="#E16AFF" stopOpacity="0.529167" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default HomePage;
