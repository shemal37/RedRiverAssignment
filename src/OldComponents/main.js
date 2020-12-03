import React, { useState, useEffect, useRef } from "react";
import deleteImage from ".././Assets/delete.svg";
const Main = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [students, setStudents] = useState([]);
  const [errMessage, setErrMessage] = useState("");

  useEffect(() => {
    setStudents([
      {
        firstName: "Jack",
        lastName: "Johnson",
        age: 11,
        group: "A",
      },
      {
        firstName: "Jill",
        lastName: "Johntown",
        age: 21,
        group: "C",
      },
      {
        firstName: "Brett",
        lastName: "Lee",
        age: 11,
        group: "B",
      },
      {
        firstName: "Sachin",
        lastName: "Tendulkar",
        age: 11,
        group: "B",
      },
      {
        firstName: "Joe",
        lastName: "Swanson",
        age: 11,
        group: "A",
      },
    ]);
  }, []);

  return (
    <div className="main">
      <label className="label">First Name:</label>
      <input
        value={firstName}
        type="text"
        placeholder="First Name"
        onChange={(e) => setFirstName(e.target.value)}
      />
      <label className="label">Last Name:</label>
      <input
        value={lastName}
        type="text"
        placeholder="Last Name"
        onChange={(e) => setLastName(e.target.value)}
      />
      <button
        className="btn-search"
        onClick={() => {
          if (!firstName && !lastName) {
            alert("Please enter First or Last name to search");
            return;
          }
          let newStudentsArray = [];
          if (firstName) {
            newStudentsArray = students.filter((item, i) => {
              return item.firstName.toLowerCase() === firstName.toLowerCase();
            });
          } else if (lastName) {
            newStudentsArray = students.filter((item, i) => {
              return item.lastName.toLowerCase() === lastName.toLowerCase();
            });
          }
          newStudentsArray.length
            ? setStudents(newStudentsArray)
            : setErrMessage("No results found!");
        }}
      >
        Search!
      </button>
      {errMessage ? <p>{errMessage}</p> : null}
      <table>
        <thead>
          <td>First Name</td>
          <td>Last Name</td>
          <td>Age</td>
          <td>Group</td>
        </thead>
        <tbody>
          {students.map((item, index) => {
            return item.firstName ? (
              <tr key={index}>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.age}</td>
                <td>{item.group}</td>
                <td>
                  <img
                    onClick={() => {
                      setStudents(students.filter((item, i) => i !== index));
                    }}
                    src={deleteImage}
                    width="30px"
                    // height="20px"
                    alt="delete button"
                    className="delete-icon"
                  />
                </td>
              </tr>
            ) : null;
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Main;
