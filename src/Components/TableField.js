import React from "react";

const TableField = ({
  fieldName,
  settingsField,
  removeStudent,
  editStudent,
}) => {
  return (
    <div className="tableField">
      {settingsField && (
        <>
          <i className="fas fa-user-edit" onClick={editStudent}></i>
          <i className="fas fa-trash-alt" onClick={removeStudent}></i>
        </>
      )}
      {fieldName}
    </div>
  );
};

export default TableField;
