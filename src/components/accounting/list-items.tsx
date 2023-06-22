import DataGrid, {
  Column,
  Editing,
  Paging,
  Lookup,
} from "devextreme-react/data-grid";
import "./style.css";
import React, { useCallback } from "react";
import { CODES_ACCOUNTS } from "../../services/constants";

const ListItems = ({ formValue, onChange }: any) => {
  const onEditorPreparing = (e: any): void => {
    if (
      e.parentType === "dataRow" &&
      (e.dataField === "code" || e.dataField === "accountName")
    ) {
      e.editorOptions.onValueChanged = function (ev: any) {
        let selectedItem = ev.component.option("selectedItem");
        e.setValue(selectedItem);
      };
    }
  };
  const insertCodeValue = (newData: any, value: any): void => {
    newData.code = value.code;
    newData.accountName = value.accountName;
  };
  const handleSave = useCallback(
    (e: any): void => {
      onChange({ ...formValue });
    },
    [onChange]
  );

  return (
    <div className="data-grid-container">
      <DataGrid
        id="gridContainer"
        dataSource={formValue.items}
        keyExpr="ID"
        showBorders={true}
        showRowLines
        onEditorPreparing={(e) => onEditorPreparing(e)}
        onSaved={(e) => handleSave(e)}
      >
        <Paging enabled={true} />
        <Editing
          mode="row"
          allowUpdating={true}
          allowDeleting={true}
          allowAdding={true}
        />
        <Column dataField="code" caption="Code" setCellValue={insertCodeValue}>
          <Lookup
            dataSource={CODES_ACCOUNTS}
            displayExpr="code"
            valueExpr="code"
          />
        </Column>
        <Column
          dataField="accountName"
          caption="Account Name"
          setCellValue={insertCodeValue}
        >
          <Lookup
            dataSource={CODES_ACCOUNTS}
            displayExpr="accountName"
            valueExpr="accountName"
          />
        </Column>

        <Column dataField="debit" caption="Debit" />
        <Column dataField="credit" caption="Credit" />
        <Column dataField="memo" caption="Memo" />
      </DataGrid>
    </div>
  );
};
export default ListItems;
