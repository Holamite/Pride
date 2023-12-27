import React, { useState } from "react";
import MainLayout from "../Layout/MainLayout";
import CoinChart from "../components/SwapPages/CoinChart";
import "../Pages/swapPage.css";
import PriceChart from "../components/SwapPages/PriceChart";

import OrderHistory from "../components/SwapPages/orderHistory";

const SwapPage = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <MainLayout>
      <section className="swap-coin-section container">
        <div className={toggle ? "price" : "price-active"}>
          <CoinChart toggle={toggle} />
          <PriceChart setToggle={setToggle} />
        </div>
        <OrderHistory />
      </section>
    </MainLayout>
  );
};

export default SwapPage;
