import AbsentStudentCard from './AbsentStudentCard'
function AbsentStudents({allStudents, toggleList}) {
  const absentStudents = allStudents.filter(
    (student) => student.isPresent === false,
  );
    return (
        <div className="border-2 border-gray-300 rounded-2xl p-4 bg-white min-h-[500px]">
        <h2 className="text-center font-bold mb-4 italic">
          Absent List ({absentStudents.length})
        </h2>
        {absentStudents.length === 0 ? (
          <p className="text-center">No student absent</p>
        ) : (
          absentStudents.map((student) => (
            <AbsentStudentCard
              key={student.id}
              student={student}
              onMakeAbsent={() => toggleList(student)}
            />
          ))
        )}
      </div>
    )
}
export default AbsentStudents