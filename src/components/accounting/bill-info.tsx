import React from "react";
import { Popup, Position } from "devextreme-react/popup";

const BillInfo = ({
  formValue: { entryNumber, documentDate },
  visible,
  handleHide,
  totalDebit,
  totalCredit,
}: any) => {
  return (
    <div>
      <Popup
        visible={visible}
        onHiding={handleHide}
        dragEnabled={false}
        hideOnOutsideClick={true}
        showCloseButton={false}
        showTitle={true}
        title="Information"
        width={300}
        height={280}
      >
        <Position at="center" my="center" collision="fit" />
        <p> - Bill Number: {entryNumber}</p>
        <p> - Date: {documentDate?.toLocaleDateString("en-US")}</p>
        <p> - Total Debit : {totalDebit}</p>
        <p> - Total Credit: {totalCredit} </p>
      </Popup>
    </div>
  );
};
export default BillInfo;
