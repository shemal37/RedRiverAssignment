import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import Form from "./Components/Form";
import Table from "./Components/Table";
import Sidebar from "./Components/sidebar";
import axios from "axios";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(null);
  const [currentStudentId, setCurrentStudentId] = useState(null);
  const [students, setStudents] = useState([]);
  const [focused, setFocused] = useState(false);
  const [clearSearch, setClearSearch] = useState(false);

  useEffect(() => {
    axios.get("/getAllStudents").then((response) => {
      response = response.data.map((item) => {
        return { ...item, studentID: uuidv4() };
      });
      setStudents(response);
    });
  }, []);

  const clearInput = () => {
    setCurrentStudentId(null);
    setFirstName("");
    setLastName("");
    setFocused(!focused);
  };
  const searchStudent = (firstName, lastName) => {
    let filteredStudents = [];
    if (firstName && lastName) {
      firstName = firstName.toLowerCase();
      lastName = lastName.toLowerCase();
      filteredStudents = students.filter((student) => {
        return (
          student.firstName.toLowerCase() === firstName &&
          student.lastName.toLowerCase() === lastName
        );
      });
    } else if (firstName) {
      firstName = firstName.toLowerCase();
      filteredStudents = students.filter((student) => {
        return student.firstName.toLowerCase() === firstName;
      });
    } else if (lastName) {
      lastName = lastName.toLowerCase();
      filteredStudents = students.filter((student) => {
        return student.lastName.toLowerCase() === lastName;
      });
    } else return;
    setStudents(filteredStudents);
  };
  const removeStudent = (studentID) => {
    const updatedStudents = students.filter(
      (student) => studentID !== student.studentID
    );
    setStudents(updatedStudents);
  };

  const editStudent = (student) => {
    setFirstName(student.firstName);
    setLastName(student.lastName);
    setAge(student.age);
    setCurrentStudentId(student.studentID);
    setFocused(!focused);
  };

  const updateStudent = () => {
    
    setStudents(
      students.map((student) =>
        student.studentID === currentStudentId
          ? { ...students, firstName, lastName, age }
          : student
      )
    );
    clearInput();
  };
  const cancelEdit = () => {
    clearInput();
    setCurrentStudentId(null);
  };

  const handleSubmit = (e, firstName, lastName) => {
    e.preventDefault();
    currentStudentId ? updateStudent() : searchStudent(firstName, lastName);
  };

  return (
    <div className="App">
      <Sidebar />
      <div className="container">
        <Form
          focused={focused}
          firstName={firstName}
          setFirstName={setFirstName}
          lastName={lastName}
          setLastName={setLastName}
          age={age}
          setAge={setAge}
          currentStudentId={currentStudentId}
          handleSubmit={handleSubmit}
          cancelEdit={cancelEdit}
        />
        <Table
          students={students}
          removeStudent={removeStudent}
          editStudent={editStudent}
        />
      </div>
    </div>
  );
}

export default App;
