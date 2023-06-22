import React, { useMemo } from "react";
import "./style.css";

const Totals = ({ totalDebit, totalCredit }: any) => {
  return (
    <div className="totals-container">
      <div className="sub-total-container">
        <div className="sub-total-header">Total Credit</div>
        <p className="sub-total-value">{totalCredit}</p>
      </div>
      <div className="sub-total-container">
        <div className="sub-total-header">Total Debit</div>
        <p className="sub-total-value">{totalDebit}</p>
      </div>
    </div>
  );
};
export default Totals;
