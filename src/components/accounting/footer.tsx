import React from "react";
import "./style.css";
import { Button } from "devextreme-react/button";

const Footer = ({ onSaveBill, onCancelBill }: any) => {
  return (
    <div className="footer-container">
      <div className="btns-container">
        <Button
          width={120}
          text="Save"
          type="default"
          stylingMode="contained"
          onClick={onSaveBill}
          className="footer-btn"
        />
        <Button
          width={120}
          text="Cancel"
          type="default"
          stylingMode="outlined"
          className="footer-btn"
          onClick={onCancelBill}
        />
      </div>
    </div>
  );
};
export default Footer;
