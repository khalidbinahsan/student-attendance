import { useState } from 'react'
import AllStudents from './components/AllStudents'
import PresentStudents from './components/PresentStudents'
import AbsentStudents from './components/AbsentStudents'

function App() {
    const [allStudents, setAllStudents] = useState([])
    const [presentStudents, setPresentStudents] = useState([
        {id: 1, name: "Asif"},
    ])
    const [absentStudents, setAbsentStudents] = useState([
        {id: 1, name: "Jahir"},
    ])
    const [studentName, setStudentName] = useState("")
    const [editMode, setEditMode] = useState(false)
    const [editableStudent, setEditableStudent] = useState(null)
    const studentNameHandler = (e) => {
        setStudentName(e.target.value)
    }
    const submitHandler = (e) => {
        e.preventDefault()
        editMode ? updateStudent() : createStudent()
    }
    const createStudent = () => {
        const newStudent = {
            id: Date.now(),
            name: studentName,
        }
        setAllStudents([newStudent, ...allStudents])
        setStudentName("")
    }
    const updateStudent = () => {

    }
    const studentDelete = (studentId) => {
        const updatedStudents = allStudents.filter(student => student.id !== studentId)
        setAllStudents(updatedStudents)
    }
  return (
    <>
    <form onSubmit={submitHandler} className="flex justify-center items-center gap-4 mb-10 mt-10">
        <div className="relative">
            <input 
            onChange={studentNameHandler}
            value={studentName}
            type="text" placeholder="Enter student name..." className="border-2 border-gray-400 px-6 py-2 rounded-xl bg-white shadow-sm focus:outline-none focus:border-blue-500 w-64 transition-all"
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

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        
        <div className="border-2 border-gray-300 rounded-2xl p-4 bg-white min-h-[500px]">
            <h2 className="text-center font-bold mb-4 italic">All Student ({allStudents.length})</h2>
            {allStudents.length === 0 ? (
                <p className="text-center">No student added</p>
            ) : (
                allStudents.map( student => (
                    <AllStudents
                    key={student.id}
                    student={student}
                    onDelete={() => studentDelete(student.id)}
                    />       
                ))
            )}
            
        </div>

        <div className="border-2 border-gray-300 rounded-2xl p-4 bg-white min-h-[500px]">
            <h2 className="text-center font-bold mb-4 italic">Present List ({presentStudents.length})</h2>
            {presentStudents.length === 0 ? (
                <p className="text-center">No student present</p>
            ) : (
                presentStudents.map(student => (
                    <PresentStudents 
                    key={student.id}
                    student={student}
                    />
                ))   
            )}
            
        </div>

        <div className="border-2 border-gray-300 rounded-2xl p-4 bg-white min-h-[500px]">
            <h2 className="text-center font-bold mb-4 italic">Absent List ({absentStudents.length})</h2>
            {absentStudents.length === 0 ? (
                <p className="text-center">No student absent</p>
            ) : (
                absentStudents.map(student => (
                    <AbsentStudents
                    key={student.id}
                    student={student}
                    />
                ))
            )}
            
        </div>

    </div>
    </>
  )
}
export default App
