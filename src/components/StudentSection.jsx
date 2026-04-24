import AllStudents from "./AllStudents";
import PresentStudents from "./PresentStudents";
import AbsentStudents from "./AbsentStudents"
function StudentSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
      <AllStudents/>
      <PresentStudents/>
      <AbsentStudents/>
    </div>
  );
}
export default StudentSection
