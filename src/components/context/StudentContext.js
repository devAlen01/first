import React, { createContext, useContext, useState } from "react";

const student = createContext();

export const useStudent = () => useContext(student);

const StudentContext = ({ children }) => {
  const [data, setData] = useState([]);

  // ! Function
  function addStudent(newStudent) {
    const data = JSON.parse(localStorage.getItem("student")) || [];
    data.push(newStudent);
    localStorage.setItem("student", JSON.stringify(data));
  }

  function readStudent() {
    const data = JSON.parse(localStorage.getItem("student")) || [];
    setData(data);
  }

  function removeStudent(id) {
    const data = JSON.parse(localStorage.getItem("student")) || [];
    const filterData = data.filter((el) => el.id !== id);
    localStorage.setItem("student", JSON.stringify(filterData));
    readStudent();
  }

  let values = {
    addStudent,
    readStudent,
    data,
    removeStudent,
  };
  return <student.Provider value={values}>{children}</student.Provider>;
};

export default StudentContext;
