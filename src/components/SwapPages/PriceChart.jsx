import React, { useState } from "react";
import ToggleSwitch from "../Toggle/ToggleSwitch";
import refreshBtn from "/Images/refresh.svg";
import settingBtn from "/Images/setting.svg";

const PriceChart = ({ toggle, setToggle }) => {
  return (
    <div>
      <div className="pricechart-box">
        <p>Price Chart</p>
        <ToggleSwitch onChange={(e) => setToggle(e.target.checked)} />
      </div>
      <div className="swap-modals">
        <p>Swap</p>
        <div className="swaps-reset">
          <img src={refreshBtn} alt="button" />
          <img src={settingBtn} alt="button" />
        </div>
      </div>
      <div className="tradebox-contents">
        <div className="trade-content">
          <div className="trade">
            <p>You sell</p>
            <p>Balance: $5,236.89</p>
          </div>
          <div className="trade-sell">
            <div className="trade-sell-unit">
              <h5>0.00</h5>
              <p>$0.00</p>
            </div>
            <div className="trade-sell-accordion">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <g clipPath="url(#clip0_51_8690)">
                  <path
                    d="M16 -0.5C24.8362 -0.5 32 6.66384 32 15.5C32 24.3362 24.8358 31.5 16 31.5C7.16416 31.5 0 24.3381 0 15.5C0 6.66192 7.16288 -0.5 16 -0.5Z"
                    fill="#53AE94"
                  />
                  <path
                    d="M17.9747 13.3682V10.988H23.4176V7.36145H8.59643V10.988H14.04V13.3663C9.61595 13.5695 6.28955 14.4456 6.28955 15.4952C6.28955 16.5448 9.61755 17.421 14.04 17.6255V25.2495H17.976V17.6248C22.392 17.421 25.7116 16.5455 25.7116 15.4968C25.7116 14.4482 22.392 13.5727 17.976 13.3688M17.976 16.9791V16.9771C17.8649 16.9842 17.2944 17.0184 16.024 17.0184C15.0083 17.0184 14.2937 16.9896 14.0419 16.9765V16.9797C10.1334 16.8066 7.21595 16.1259 7.21595 15.3115C7.21595 14.4971 10.1337 13.8175 14.0419 13.644V16.3016C14.2979 16.3192 15.03 16.3624 16.0406 16.3624C17.2544 16.3624 17.8646 16.3119 17.9766 16.3016V13.644C21.8774 13.8178 24.7881 14.4991 24.7881 15.3106C24.7881 16.1221 21.8761 16.8037 17.9766 16.9775"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_51_8690">
                    <rect
                      width="32"
                      height="32"
                      fill="white"
                      transform="translate(0 -0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <p>USDc</p>
              <svg
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                fill="#ffffff"
                width="1.5rem"
                height="1.5rem"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <rect x="0" fill="none" width="20" height="20"></rect>
                  <g>
                    <path d="M15 8l-4.03 6L7 8h8z"></path>{" "}
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
        <svg
          className="swap-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="3rem"
          height="3rem"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M9.01023 20.5002L3.99023 15.4902"
            stroke="white"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.00977 3.5V20.5"
            stroke="white"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.9902 3.5L20.0102 8.51"
            stroke="white"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.9902 20.5V3.5"
            stroke="white"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="trade-content">
          <div className="trade">
            <p>You buy</p>
            <p>Balance: --</p>
          </div>
          <div className="trade-sell">
            <div className="trade-sell-unit">
              <h5>0.00</h5>
              <p>$0.00</p>
            </div>
            <div className="trade-sell-accordion">
              <svg
                className="ethereum-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="25"
                viewBox="0 0 15 25"
                fill="none"
              >
                <g clipPath="url(#clip0_51_8681)">
                  <path
                    d="M7.36594 0.5L7.20508 1.04676V16.9126L7.36594 17.0731L14.7307 12.7199L7.36594 0.5Z"
                    fill="#343434"
                  />
                  <path
                    d="M7.36618 0.5L0.00146484 12.7199L7.36618 17.0732V9.3724V0.5Z"
                    fill="#8C8C8C"
                  />
                  <path
                    d="M7.36555 18.4677L7.2749 18.5782V24.2299L7.36555 24.4946L14.7347 14.1166L7.36555 18.4677Z"
                    fill="#3C3C3B"
                  />
                  <path
                    d="M7.36569 24.4946V18.4675L0.000976562 14.1165L7.36569 24.4946Z"
                    fill="#8C8C8C"
                  />
                  <path
                    d="M7.36572 17.0731L14.7303 12.7199L7.36572 9.37244V17.0731Z"
                    fill="#141414"
                  />
                  <path
                    d="M0.000976562 12.7199L7.36558 17.0732V9.37244L0.000976562 12.7199Z"
                    fill="#393939"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_51_8681">
                    <rect
                      width="14.736"
                      height="24"
                      fill="white"
                      transform="translate(0 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <p>ETH</p>
              <svg
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                fill="#ffffff"
                width="1.5rem"
                height="1.5rem"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <rect x="0" fill="none" width="20" height="20"></rect>
                  <g>
                    <path d="M15 8l-4.03 6L7 8h8z"></path>{" "}
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div className="trade-content-buy">
          <div className="trade-buy">
            <p>1 WETH =</p>
            <p>1621.1548 USDT</p>
          </div>
          <svg
            width="1rem"
            height="1rem"
            viewBox="0 -4.5 20 20"
            version="1.1"
            fill="#000000"
            transform="rotate(0)"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="#FFFFFFCCCCCC"
              strokeWidth="0.16"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <title>arrow_down [#FFFFFF338]</title>
              <desc>Created with Sketch.</desc> <defs> </defs>
              <g
                id="Page-1"
                strokeWidth="0.0002"
                fill="none"
                fillRule="evenodd"
              >
                <g
                  id="Dribbble-Light-Preview"
                  transform="translate(-220.000000, -6684.000000)"
                  fill="#FFFFFF"
                >
                  <g id="icons" transform="translate(56.000000, 160.000000)">
                    <path
                      d="M164.292308,6524.36583 L164.292308,6524.36583 C163.902564,6524.77071 163.902564,6525.42619 164.292308,6525.83004 L172.555873,6534.39267 C173.33636,6535.20244 174.602528,6535.20244 175.383014,6534.39267 L183.70754,6525.76791 C184.093286,6525.36716 184.098283,6524.71997 183.717533,6524.31405 C183.328789,6523.89985 182.68821,6523.89467 182.29347,6524.30266 L174.676479,6532.19636 C174.285736,6532.60124 173.653152,6532.60124 173.262409,6532.19636 L165.705379,6524.36583 C165.315635,6523.96094 164.683051,6523.96094 164.292308,6524.36583"
                      id="arrow_down-[#FFFFFF338]"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </div>
        <button className="btn btn-block">Connect Wallet</button>
      </div>
    </div>
  );
};

export default PriceChart;
