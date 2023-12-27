import React, { useEffect } from "react";
import MainLayout from "../../../Layout/MainLayout";
import LaunchpadHeader from "./LaunchpadHeader";
import { useLocation } from "react-router-dom";

const SecondLaunchpadForm = (props) => {
  // Destructure the location prop with a default value
  const { location = {} } = props;

  // Destructure the state from location.state
  const { HandleChange, FormData, IsFormValid } = location.state || {};

  // Use the state as needed
  useEffect(() => {
    console.log("FormData in SecondLaunchpadForm:", FormData);
    // Other logic using FormData, HandleChange, IsFormValid, etc.
  }, [FormData, HandleChange, IsFormValid]);

  return (
    <MainLayout>
      <div className="container">
        <LaunchpadHeader />
        <div className="container">
          <div className="progress-content">
            <div className="progress">
              <span className="DeFi"></span>
            </div>
            <h2>
              <span>2/4</span> DeFi Launchpad Info
            </h2>
            <p>
              Enter the launchpad information that you want to raise, that
              should be enter all details about your pre-sale
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default SecondLaunchpadForm;
