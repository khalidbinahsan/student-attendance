import AllStudents from "./AllStudents";
import PresentStudents from "./PresentStudents";
import AbsentStudents from "./AbsentStudents"
function StudentSection({allStudents, setAllStudents, setEditMode, setStudentName, setEditableStudent}) {
  const toggleList = (student) => {
    const updatedStudents = allStudents.map((item) => {
      if (item.id === student.id) {
        return { ...item, isPresent: !item.isPresent };
      }
      return item;
    });
    setAllStudents(updatedStudents);
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
      <AllStudents
      allStudents={allStudents}
      setAllStudents={setAllStudents}
      setEditMode={setEditMode}
      setStudentName={setStudentName}
      setEditableStudent={setEditableStudent}
      />
      <PresentStudents
      allStudents={allStudents}
      toggleList={toggleList}
      />
      <AbsentStudents
      allStudents={allStudents}
      toggleList={toggleList}
      />
    </div>
  );
}
export default StudentSection
