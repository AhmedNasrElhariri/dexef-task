import React, { Fragment, useCallback, useMemo, useState } from "react";
import HeaderInputs from "./header-inputs";
import ListItems from "./list-items";
import { items } from "../../services/constants";
import Totals from "./totals";
import Footer from "./footer";
import BillInfo from "./bill-info";
import "./style.css";

const initialValue = {
  entryNumber: 0,
  documentDate: new Date(),
  items: items,
};
const AccountingBill = () => {
  const [formValue, setFormValue] = useState(initialValue);
  const [visible, setVisible] = useState(false);
  const handleCancelBill = useCallback(() => {
    window.location.reload();
  }, [setFormValue]);
  const handleSaveBill = useCallback(() => {
    setVisible(true);
  }, [setVisible]);
  const handleHide = useCallback(() => {
    setVisible(false);
  }, [setVisible]);
  const totalDebit = useMemo(
    () =>
      formValue?.items.reduce(
        (acc: number, item: any) => acc + (item?.debit || 0),
        0
      ),
    [formValue]
  );
  const totalCredit = useMemo(
    () =>
      formValue?.items.reduce(
        (acc: number, item: any) => acc + (item?.credit || 0),
        0
      ),
    [formValue]
  );

  return (
    <Fragment>
      <HeaderInputs formValue={formValue} onChange={setFormValue} />
      <ListItems formValue={formValue} onChange={setFormValue} />
      <Totals totalCredit={totalCredit} totalDebit={totalDebit} />
      <Footer onCancelBill={handleCancelBill} onSaveBill={handleSaveBill} />
      <BillInfo
        formValue={formValue}
        visible={visible}
        handleHide={handleHide}
        totalCredit={totalCredit}
        totalDebit={totalDebit}
      />
    </Fragment>
  );
};
export default AccountingBill;
