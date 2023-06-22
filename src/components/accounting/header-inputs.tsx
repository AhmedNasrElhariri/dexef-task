import { NumberBox } from "devextreme-react/number-box";
import DateBox from "devextreme-react/date-box";
import "./style.css";
import React from "react";

const HeaderInputs = ({ formValue, onChange }: any) => {
  return (
    <div className="header-input-container">
      <div className="input-container">
        <div className="label">Entry Number: No</div>
        <div>
          <NumberBox
            width={200}
            name="entryNumber"
            onValueChanged={(e) =>
              onChange({ ...formValue, entryNumber: e.value })
            }
            value={formValue?.entryNumber}
            style={{ border: "none" }}
          />
        </div>
      </div>
      <div>
        <div className="label">Document Date * :</div>
        <div>
          <DateBox
            type="date"
            width={200}
            name="documentDate"
            onValueChanged={(e) =>
              onChange({ ...formValue, documentDate: e.value })
            }
            value={formValue?.documentDate}
            style={{ border: "none" }}
          />
        </div>
      </div>
    </div>
  );
};
export default HeaderInputs;
