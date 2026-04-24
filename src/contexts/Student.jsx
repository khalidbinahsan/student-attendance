import { Children, createContext, useState } from "react";
export const StudentCtx = createContext();

const StudentProvider = ({children}) => {
  const [allStudents, setAllStudents] = useState([]);
  const [studentName, setStudentName] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editableStudent, setEditableStudent] = useState(null);
// Handler
  const studentDelete = (studentId) => {
    const updatedStudents = allStudents.filter(
      (student) => student.id !== studentId,
    );
    setAllStudents(updatedStudents);
  };
  const studentEdit = (student) => {
    setEditMode(true);
    setStudentName(student.name);
    setEditableStudent(student);
  };
  const makePresentHandler = (student) => {
    if (student.isPresent !== undefined) {
      alert(
        `This student is already on the ${student.isPresent ? "present" : "absent"} list`,
      );
    } else {
      const updatedStudents = allStudents.map((item) => {
        if (item.id === student.id) {
          return { ...item, isPresent: true };
        }
        return item;
      });

      setAllStudents(updatedStudents);
    }
  };
  const makeAbsentHandler = (student) => {
    if (student.isPresent !== undefined) {
      alert(
        `This student is already on the ${student.isPresent ? "present" : "absent"} list`,
      );
    } else {
      const updatedStudents = allStudents.map((item) => {
        if (item.id === student.id) {
          return { ...student, isPresent: false };
        }
        return item;
      });
      setAllStudents(updatedStudents);
    }
  };
 const toggleList = (student) => {
    const updatedStudents = allStudents.map((item) => {
      if (item.id === student.id) {
        return { ...item, isPresent: !item.isPresent };
      }
      return item;
    });
    setAllStudents(updatedStudents);
  };

  const ctxValue = {
    allStudents,
    setAllStudents,
    studentName, 
    setStudentName,
    editMode,
    setEditMode,
    editableStudent,
    setEditableStudent,
    studentDelete,
    studentEdit,
    makePresentHandler,
    makeAbsentHandler,
    toggleList
  }
  return <StudentCtx.Provider value={ctxValue}>
    {children}
  </StudentCtx.Provider>
};

export default StudentProvider
