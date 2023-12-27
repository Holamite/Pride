import React, { useState, useEffect } from "react";
import MainLayout from "../../../Layout/MainLayout";
import LaunchpadHeader from "./LaunchpadHeader";
import "../launchpadPages.css";
import { Link } from "react-router-dom";
import SecondLaunchpadForm from "./SecondLaunchpadForm";

const CreateLaunchpad = () => {
  const [formData, setFormData] = useState({
    formToken: "",
    currency: "",
    fees: "",
    program: "",
    preSale: "",
  });

  console.log(formData);

  function handleChange(e) {
    e.preventDefault();
    const { name, value, type, checked } = e.target;

    setFormData((prev) => {
      return {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const isValid = Object.values(FormData).every(
      (value) => value.trim() !== ""
    );
    setIsFormValid(isValid);
  }, [FormData]);

  return (
    <MainLayout>
      <div className="container">
        <LaunchpadHeader />
        <div className="container">
          <div className="progress-content">
            <div className="progress">
              <span className="verify-token"></span>
            </div>
            <h2>
              <span>1/4</span> Verify Token
            </h2>
            <p>Enter token address and verify</p>
          </div>

          <form className="form-box">
            <div
              className={`form-row ${
                formData.formToken.trim() === "" ? "error" : ""
              }`}
            >
              <label htmlFor="formToken" className="form-label">
                <div className="pool-fees">
                  Token address
                  <span>
                    Pool Creation fee = <strong> 1 BNB</strong>
                  </span>
                </div>
                <br />
                <input
                  className="form-input"
                  type="text"
                  name="formToken"
                  id="formToken"
                  onChange={handleChange}
                  value={formData.formToken}
                  placeholder="Enter your token address"
                  required
                />
                {formData.formToken.trim() === "" && (
                  <p className="error-message">Token address is required</p>
                )}
                <p className="label-addition">
                  Don’t have a token address? <a href="#">Create here</a>
                </p>
              </label>
            </div>
            <div className="form-row">
              <label htmlFor="currency" className="form-label">
                Select Currency <br />
                <span>
                  Users will pay the selected currency for your tokens
                </span>
              </label>
              <br />
              <select
                id="currency"
                name="currency"
                onChange={handleChange}
                value={formData.currency}
              >
                <option value="">--Choose--</option>
                <option value="ETH">ETH</option>
                <option value="BTC">BTC</option>
                <option value="USDT">USDT</option>
                <option value="SOL">SOL</option>
                <option value="ADA">ADA</option>
              </select>
              {formData.currency.trim() === "" && (
                <p className="error-message">Currency is required</p>
              )}
            </div>
            <div className="form-row">
              <label htmlFor="fees" className="form-label">
                Select Fee Options
              </label>
              <br />
              <select
                id="fees"
                name="fees"
                onChange={handleChange}
                value={formData.fees}
              >
                <option value="">--Select option--</option>
                <option value="Disable ">
                  5% BNB raised only (Recommended)
                </option>
                <option value="enable">10% USDT raised only</option>
              </select>
              {formData.fees.trim() === "" && (
                <p className="error-message">Fee option is required</p>
              )}
            </div>
            <div className="form-row">
              <label htmlFor="program" className="form-label">
                Select Affiliate Program
              </label>
              <br />
              <select
                id="program"
                name="program"
                onChange={handleChange}
                value={formData.program}
              >
                <option value="">--Select option--</option>
                <option value="Disable ">Disable Affiliate</option>
                <option value="enable">Enable Affiliate</option>
              </select>
              {formData.program.trim() === "" && (
                <p className="error-message">Affiliate program is required</p>
              )}
            </div>

            <Link
              to={{
                pathname: "/secondLaunchpadForm",
                state: {
                  HandleChange: handleChange,
                  FormData: formData,
                  IsFormValid: isFormValid,
                },
              }}
            >
              <button disabled={!isFormValid} className="btn form-btn">
                Continue
              </button>
            </Link>
          </form>
        </div>
      </div>
    </MainLayout>
  );
};

export default CreateLaunchpad;
