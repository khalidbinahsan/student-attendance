import { useState, useContext } from "react";
import Pagination from "./Pagination";
import AllStudentCard from "./AllStudentCard"
import { StudentCtx } from "../contexts/Student";
function AllStudents() {
  const {allStudents, studentDelete, studentEdit, makePresentHandler, makeAbsentHandler} = useContext(StudentCtx)
  // State
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 6;
  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentStudents = allStudents.slice(indexOfFirstItem, indexOfLastItem);
  const totalStudentPage = Math.ceil(allStudents.length / itemPerPage);
  
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
