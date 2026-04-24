import {  useContext } from "react";
import {StudentCtx} from "../contexts/Student"
function StudentForm() {
  const {setAllStudents, setStudentName, editMode, studentName, allStudents, editableStudent, setEditMode} = useContext(StudentCtx)
  // Functions
  const studentNameHandler = (e) => {
    setStudentName(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    editMode ? updateStudent() : createStudent();
  };
  const createStudent = () => {
    const newStudent = {
      id: Date.now(),
      name: studentName,
      isPresent: undefined,
    };
    setAllStudents([newStudent, ...allStudents]);
    setStudentName("");
  };
  const updateStudent = () => {
    const updatedStudents = allStudents.map((student) => {
      if (student.id === editableStudent.id) {
        return { ...student, name: studentName };
      }
      return student;
    });
    setAllStudents(updatedStudents);
    setEditMode(false);
    setStudentName("");
  };
  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col md:flex-row justify-center items-center gap-4 mb-10 mt-10"
    >
      <div className="relative">
        <input
          onChange={studentNameHandler}
          value={studentName}
          type="text"
          required
          placeholder="Enter student name..."
          className="border-2 border-gray-400 px-6 py-2 rounded-xl bg-white shadow-sm focus:outline-none focus:border-blue-500 w-64 transition-all"
        />
        <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xl animate-bounce">
          👆
        </span>
      </div>

      <button
        type="submit"
        className="border-2 border-blue px-6 py-2 rounded-xl bg-blue-700 text-white cursor-pointer hover:bg-black hover:text-white transition-all font-medium active:scale-95"
      >
        {editMode ? "Update Student" : "Add Student"}
      </button>
    </form>
  );
}

export default StudentForm;
