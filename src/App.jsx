import { useState } from "react";
import StudentForm from "./components/StudentForm";
import StudentSection from "./components/StudentSection";

function App() {
  const [allStudents, setAllStudents] = useState([]);
  const [studentName, setStudentName] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editableStudent, setEditableStudent] = useState(null);
  return (
    <>
      <StudentForm 
      setAllStudents={setAllStudents}
      studentName={studentName}
      setStudentName={setStudentName}
      editMode={editMode}
      allStudents={allStudents}
      editableStudent={editableStudent}
      setEditMode={setEditMode}
      />
      <StudentSection 
      allStudents={allStudents}
      setAllStudents={setAllStudents}
      setEditMode={setEditMode}
      setStudentName={setStudentName}
      setEditableStudent={setEditableStudent}
      />
    </>
  );
}
export default App;
