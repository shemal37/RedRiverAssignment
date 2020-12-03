import React, { useState } from "react";

const Form = (props) => {
  const {
    focused,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    age,
    setAge,
    currentStudentId,
    handleSubmit,
    cancelEdit,
  } = props;

  return (
    <form
      style={
        focused
          ? {
              borderLeft: "2px solid #36304a",
              margin: "15px",
              padding: "15px",
            }
          : null
      }
    >
      <label>First Name</label>
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
      />
      <label>Last Name</label>
      <input
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        required
      />
      {currentStudentId !== null ? (
        <>
          <label>Age</label>
          <input
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </>
      ) : null}

      <button
        type="submit"
        onClick={(e) => handleSubmit(e, firstName, lastName)}
      >
        {currentStudentId !== null ? "Update" : "Search"}
      </button>
      {currentStudentId !== null ? (
        <button type="submit" onClick={(e) => cancelEdit(e)}>
          Cancel
        </button>
      ) : null}
    </form>
  );
};

export default Form;
