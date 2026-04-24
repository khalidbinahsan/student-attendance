import { useState } from "react";
import Pagination from "./Pagination";
import AllStudentCard from "./AllStudentCard"
function AllStudents({allStudents, setAllStudents, setEditMode, setStudentName, setEditableStudent, toggleList}) {
  // State
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 6;
  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentStudents = allStudents.slice(indexOfFirstItem, indexOfLastItem);
  const totalStudentPage = Math.ceil(allStudents.length / itemPerPage);
  
 

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

  return (
    <div className="border-2 border-gray-300 rounded-2xl p-4 bg-white min-h-[500px]">
      <h2 className="text-center font-bold mb-4 italic">
        All Student ({allStudents.length})
      </h2>
      {allStudents.length === 0 ? (
        <p className="text-center">No student added. Please add student</p>
      ) : (
        currentStudents.map((student) => (
          <AllStudentCard
            key={student.id}
            student={student}
            onDelete={() => studentDelete(student.id)}
            onEdit={() => studentEdit(student)}
            onMakePresent={() => makePresentHandler(student)}
            onMakeAbsent={() => makeAbsentHandler(student)}
            toggleList={toggleList}
          />
        ))
      )}
      {allStudents.length > itemPerPage && (
        <Pagination
          pages={totalStudentPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </div>
  );
}
export default AllStudents;
