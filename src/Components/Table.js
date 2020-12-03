import React from "react";
import TableField from "./TableField";

const Table = ({ students, removeStudent, editStudent }) => {
  return (
    <div className="table">
      <div className="tableHeading">
        <TableField fieldName="First Name" />
        <TableField fieldName="Last Name" />
        <TableField fieldName="Age" />
        <TableField fieldName="Settings" />
      </div>
      {students.map((student) => (
        <div className="tableRow" key={student.studentID}>
          <TableField fieldName={student.firstName} />
          <TableField fieldName={student.lastName} />
          <TableField fieldName={student.age} />
          <TableField
            settingsField
            removeStudent={() => removeStudent(student.studentID)}
            editStudent={() => editStudent(student)}
          />
        </div>
      ))}
    </div>
  );
};

export default Table;
