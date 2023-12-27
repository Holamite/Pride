import React from "react";

const OrderHistory = () => {
  const iterations = Array.from({ length: 4 });

  return (
    <div className="orderlist-box">
      <h4>Order history</h4>
      <div className="orderlist-content">
        <div className="orderlist-row">
          <div className="orderlist-chains">
            <h6>All chains</h6>
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
          {iterations.map((_, index) => (
            <div key={index}>
              {
                <div className="orderlist-icon-box orderlist-item">
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
                  <p>Ethereum</p>
                </div>
              }
            </div>
          ))}
        </div>
        <div className="orderlist-row">
          <h6>Pay</h6>
          {iterations.map((_, index) => (
            <div className="orderlist-item" key={index}>
              {<p>0.05WETH</p>}
            </div>
          ))}
        </div>
        <div className="orderlist-row">
          <h6>Receive</h6>
          {iterations.map((_, index) => (
            <div className="orderlist-item" key={index}>
              {<p>89.756 USDT</p>}
            </div>
          ))}
        </div>
        <div className="orderlist-row">
          <h6>Creation date</h6>
          {iterations.map((_, index) => (
            <div className="orderlist-item" key={index}>
              {<p>23-02-2023</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
